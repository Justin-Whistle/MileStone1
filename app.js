import { myQuestions } from "./questions.js";
const quizContainer = document.getElementById('quiz');
const scoreboard = document.getElementById('scorebar');
let userScore = 0
let currentQuestionIndex = 0
let currentQuestion = myQuestions[currentQuestionIndex];
let questionDiv = document.createElement("div");
let questionText = document.createElement("h2");
questionDiv.className = "question";
questionDiv.appendChild(questionText);
quizContainer.appendChild(questionDiv);

function buildQuiz() {
    //Quiz questions 
    currentQuestion = myQuestions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
    currentQuestionIndex++
   
    for (let i = 0; i < 3; i++) {
        answerButtons[i].innerText = currentQuestion.answers[i].text;
    }    
}

let answerButtons = document.querySelectorAll(".answer");
 
for (let i = 0; i < 3; i++) {
    
    answerButtons[i].addEventListener("click", function () {
        //scoring
        if (currentQuestion.answers[i].correct == true) {
            userScore +=10
            
        } else {
            userScore -=10
        }

        scoreboard.innerText = "Score: " + userScore;

        if (currentQuestionIndex < myQuestions.length) {
            buildQuiz()
        }
        
        else {
            alert(`Game Over! You're score was ${userScore}!`);
            window.location.reload();
        }
    })
}

buildQuiz()
