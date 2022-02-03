const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const scoreboard = document.getElementById('scorebar');

function buildQuiz(){
    myQuestions.forEach(Q => {
       // console.log(Q.answers)
        let myQuestion = document.createElement("div");
        myQuestion.className = "question";
        let questionText = document.createElement("h2");
        questionText.innerText = Q.question;
        myQuestion.appendChild(questionText)
        //console.log(questionText);
        Q.answers.forEach(A => {

            console.log(A)
             let answerRadioBtn = document.createElement("input");
             answerRadioBtn.value = A.text;
             answerRadioBtn.type  = "radio"; 
             myQuestion.appendChild(answerRadioBtn)

             

            

        })
        quizContainer.appendChild(myQuestion);
    });
   

    const output = [];
}

function scoring(){} 

function showResults(){}

buildQuiz()
