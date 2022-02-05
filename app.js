const quizContainer = document.getElementById('quiz');
const scoreboard = document.getElementById('scorebar');
const answerButtons = document.getElementById('answer-buttons');

function buildQuiz(){
    //Quiz questions
    currentQuestion = 0;
    let myQuestion = document.createElement("div");
    myQuestion.className = "question";
    let questionText = document.createElement("h2");
    questionText.innerText = myQuestions[currentQuestion].question;
    myQuestion.appendChild(questionText);
    quizContainer.appendChild(myQuestion);
    
    //Quiz answers
    
    
    
       
}

function selectAnswer(){}

function scoring(){} 

function showResults(){}

buildQuiz()
