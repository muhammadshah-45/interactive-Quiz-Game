



//Create an array Object for answer
var questions = [
    {
        question: "What is the best skills in Pakistan?",
        options: ["Web Development", "Amazon", "Graphic Designing", "E-commerce"],
        correct: 0
    },
    {
        question: "Which one is beautiful city in Pakistan",
        options: ["Peshawar", "Swat", "Murree", "Abottabad"],
        correct: 2
    }
   
    
];
var questionArea = document.getElementById("question-area")
var nextButton=document.getElementById("next-question");
var answerButtons = document.querySelectorAll(".answer-btn")
var displayScore = document.getElementById("score");
var nextButton = document.getElementById("next-button");
var quizContainer = document.querySelector(".quiz-container")


var currentQuestionIndex= 0;
var score = 0;


//Handling Click Events //

function startTheGame(){
    currentQuestionIndex = 0;
    score = 0;

    nextButton.classList.add("hidden");
    showQuestion(questions[currentQuestionIndex]);
    
}

function showQuestion(question){
   // render the question to question area to display Question
   questionArea.innerText = question.question;    
   // render the answer choices to display Option on html
   answerButtons.forEach((optionButtons,answerIndex)=>{
     console.log(optionButtons); // it shows all options in the console
     optionButtons.innerHTML = question.options[answerIndex]; // it will shows  all options
     optionButtons.onclick = () => selectAnswer(answerIndex);
   })
}

function selectAnswer(index){
    const question = questions[currentQuestionIndex];

    if(index === question.correct){
        score++;
        displayScore.innerText = `Score : ${score}`;
        alert("Correct");
    } else{
        alert("Try Again")
    }
    nextButton.classList.remove("hidden")
}

function nextQuizButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion(questions[currentQuestionIndex]);
    nextButton.classList.add("hidden")
  }else{
    endGame()
  }
}
startTheGame()

function changeColor(e){
    e.style.background = "green";
    e.style.fontWeight = "bold"
}


function  endGame(){
    questionArea.innerText =`Game Over! Your score is ${score}.`;
    answerButtons.forEach((optionButtons,answerIndex)=>{
        optionButtons.innerHTML = ""
        answerIndex.innerHTML = ""
    });
    answerButtons.innerHTML = ""
    displayScore.innerText = ""
    nextButton.classList.add("hidden");
    playAgainButton.classList.remove("hidden")
    
}
function playBtn(){
    startTheGame()
}