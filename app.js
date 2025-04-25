var questions = [
  {
    question: "HTML Stands for",
    option1: "Hyper Text Markup Language",
    option2: "Hyper Tech Markup Language",
    option3: "Hyper Touch Markup Language",
    corrAnswer: "Hyper Text Markup Language",
  },
  {
    question: "CSS Stands for",
    option1: "Cascoding Style Sheets",
    option2: "Cascading Style Sheets",
    option3: "Cascating Style Sheets",
    corrAnswer: "Cascading Style Sheets",
  },
  {
    question: "Which tag is used for most large heading",
    option1: "<h6>",
    option2: "<h2>",
    option3: "<h1>",
    corrAnswer: "<h1>",
  },
  {
    question: "Which tag is used to make element unique ",
    option1: "id",
    option2: "class  ",
    option3: "label",
    corrAnswer: "id",
  },
  {
    question: "Any element assigned with id, can be get in css ",
    option1: "by # tag",
    option2: "by @ tag",
    option3: "by & tag",
    corrAnswer: "by # tag",
  },
  {
    question: "CSS can be used with ______ methods ",
    option1: "8",
    option2: "3",
    option3: "4",
    corrAnswer: "3",
  },
  {
    question: "In JS variable types are ____________ ",
    option1: "6",
    option2: "3",
    option3: "8",
    corrAnswer: "8",
  },
  {
    question: "In array we can use key name and value ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "False",
  },
  {
    question: "toFixed() is used to define length of decimal ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "True",
  },
  {
    question: "push() method is used to add element in the start of array ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "False",
  },
];

var question = document.getElementById("ques");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var nextBtn = document.getElementById("btn");
var allOptions = document.getElementsByTagName("input");
var timer = document.getElementById("timer");
var quantityQues = document.getElementById("quantity");
var index = 0;
var score=0;
var min=1;
var sec=59;
var quantity=0;


nextBtn.disabled=true;

setInterval(function () {
    timer.innerHTML = `${min} : ${sec}`;
    sec--;
    if(sec < 0) {
        min--;
        sec=59;
    }
    if(min < 0) {
        min = 1;
        sec=59;
        nextQues();
    }
}, 1000);



function nextQues() {
//   if(index <= questions.length - 1) {
    for(var i=0; i<allOptions.length; i++) {
        if(allOptions[i].checked) {
            allOptions[i].checked=false;  
            
            var selectedValue = allOptions[i].value;
            var selectedOption = questions[index-1][`option${selectedValue}`];
            var corrOption = questions[index-1].corrAnswer;
    
            if(selectedOption == corrOption) {
                score++;            
            }
        }
      }      
    
//   }
  if (index > questions.length - 1) {
    console.log(score);
    document.getElementById("quiz").style.display = "none";
    var scoreNum = document.createElement("h3");
    var scoreText = document.createTextNode(`SCORE: ${score} out of 10.`);
    scoreNum.appendChild(scoreText);
    
    var per=document.createElement("h3");
    var perText = document.createTextNode(`Percentage: ${((score / 10) * 100).toFixed(2)}%`);
    per.appendChild(perText);

    document.body.appendChild(scoreNum);
    document.body.appendChild(per);
    index =0;
  } else {
    quantity++;
    quantityQues.innerHTML = `Question ${quantity} of ${questions.length}`;
    question.innerText = questions[index].question;
    option1.innerText = questions[index].option1;
    option2.innerText = questions[index].option2;
    option3.innerText = questions[index].option3;
    index++;
  }
  nextBtn.disabled=true;

  min=1;
  sec=59;
}

function clicked() {
  nextBtn.disabled=false;
}

