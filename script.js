const questions=[
    {
        question:"What is the Age of Harsh",
        answers:[
            {Text:"20",correct:false},
            {Text:"21",correct:false},
            {Text:"22",correct:false},
            {Text:"23",correct:true},
            ]
    },
    {
        question:"Harsh Favorite sports",
        answers:[
            {Text:"Gym",correct:true},
            {Text:"Running",correct:false},
            {Text:"Swimming",correct:false},
            {Text:"Gaming",correct:false},
            ]
    },
    {
        question:"Guess Harsh's BodyWeight!",
        answers:[
            {Text:"50",correct:false},
            {Text:"60",correct:false},
            {Text:"70",correct:true},
            {Text:"80",correct:false},
            ]
    },
    {
        question:"what Harsh Want to be!!",
        answers:[
            {Text:"Java Developer",correct:false},
            {Text:"React Developer",correct:true},
            {Text:"BusinessMan",correct:false},
            {Text:"Enterprenaur",correct:false},
            ]
    }
];
const questionElement=document.getElementById("ques");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("Next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo +"."+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.Text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener("click",selectAnswer)
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect=selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
        
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`Your Scored ${score} out of ${questions.length}!`
    nextButton.innerHTML="Play again"
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();









