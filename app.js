



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
    },
    {
        question:"Why  we learn IT skills?",
        options:["Earn Money","For Passion","For business","None of Them"],
        correct: 1
    }
    
    
];
var question = document.getElementById("question")
var nextButton=document.getElementById("next-question");

const questionElement = document.querySelector(".question-area");
var currentQuestion= 0;
var score = 0;
var questionOne = questions[0].question;

questionElement.append(questionOne)

console.log(questionOne);

var options = document.querySelectorAll(".options")
console.log(options);
function renderOptions(){

}

