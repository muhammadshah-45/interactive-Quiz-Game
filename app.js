



//Create an array Object for answer
var questions = [
    {
        question: "What is the best skills in Pakistan?",
        options: ["Web Development", "Amazon", "Graphic Designing", "E-commerce"],
        correct: 1
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


var currentQuestion= 0;
var score = 0;





