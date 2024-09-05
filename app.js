



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
    
}

startTheGame()




