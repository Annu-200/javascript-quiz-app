const quizContainer = document.querySelector(".quiz-container");
const quizMainContainer = document.querySelector(".quiz-main-container");
const starbutton = document.querySelector(".quiz-button");
const option = document.querySelectorAll("input");
const questionbox = document.querySelector(".main-ques");
const nextBtn = document.querySelector(".button");
const selectOpt = document.querySelectorAll(".option");
const parentOpt = document.querySelectorAll(".opt");
const correctOption = document.querySelectorAll(".correct");
const IconRight = document.querySelectorAll(".option span");
const correctScore = document.querySelector(".total-correct-score");
const totalScore = document.querySelector(".Total-container");
const rightAns = document.querySelector(".right-ans");
const wrongAns = document.querySelector(".wrong-ans");
const OptionContainer = document.querySelector(".option-display")
const Progress = document.querySelector(".progress");
const lowProgress = document.querySelector(".low-score");
const ReTry = document.querySelector(".retry-button");
let ShowScore = document.querySelector(".display-score");
let Timer = document.querySelector(".time");
const sound = document.querySelector(".volume-icon ")
const soundMute = document.querySelector(".volume-icon-mute")
const backgroundSound = document.querySelector("#levelUpSound")
const down = document.querySelector("#fail")


starbutton.addEventListener("click", function (e) {
  quizContainer.classList.add("start");
  quizMainContainer.classList.add("show");
  document.body.style.backgroundColor = "#CCE2C2";
  timerHandler()
});


const question = [
  {
    ques: "Which of the following is a correct way to declare a JavaScript variable?",
    a: "var  carName;",
    b: "var = carName;",
    c: "carName;",
    d: "variale Name ;",

    correct: "a",
  },
  {
    ques: 'What is the correct syntax for referring to an external script called "script.js"?',
    a: '<script name="script.js">',
    b: '<script src="script.js">',
    c: '<script href="script.js">',
    d: '<script link="script.js">',

    correct: "b",
  },
  {
    ques: " How do you create a function in JavaScript?",
    a: " function myFunction()",
    b: "create myFunction()",
    c: "function = myFunction()",
    d: "function myFunction();",

    correct: "a",
  },
  {
    "ques": "Which of the following is the correct way to declare a variable in JavaScript?",
    "a": "var x = 10;",
    "b": "variable x = 10;",
    "c": "let x: 10;",
    "d": "x = 10;",
    "correct": "a"
  },
  {
    "ques": "Which symbol is used for comments in JavaScript?",
    "a": "//",
    "b": "/* */",
    "c": "#",
    "d": "<!-- -->",
    "correct": "a"
  },
  {
    "ques": "How can you convert a string to an integer in JavaScript?",
    "a": "parseInt()",
    "b": "Number()",
    "c": "Both A and B",
    "d": "int()",
    "correct": "c"
  },
  {
    "ques": "Which company developed JavaScript?",
    "a": "Mozilla",
    "b": "Netscape",
    "c": "Microsoft",
    "d": "Google",
    "correct": "b"
  },
  {
    "ques": "How do you write 'Hello World' in an alert box?",
    "a": "msg('Hello World');",
    "b": "alert('Hello World');",
    "c": "msgBox('Hello World');",
    "d": "alertBox('Hello World');",
    "correct": "b"
  },
  {
    "ques": "Which method can be used to find the length of a string in JavaScript?",
    "a": "length()",
    "b": "size()",
    "c": "len()",
    "d": "length",
    "correct": "d"
  },
  {
    "ques": "Which JavaScript keyword is used to define a constant?",
    "a": "constant",
    "b": "let",
    "c": "var",
    "d": "const",
    "correct": "d"
  },  
  {
    "ques": "How do you create an array in JavaScript?",
    "a": "var colors = ['red', 'green', 'blue'];",
    "b": "var colors = (1:'red', 2:'green', 3:'blue');",
    "c": "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue');",
    "d": "var colors = 'red', 'green', 'blue';",
    "correct": "a"
  },
  {
    "ques": "What will the following code return: Boolean(10 > 9)?",
    "a": "true",
    "b": "false",
    "c": "NaN",
    "d": "undefined",
    "correct": "a"
  },
  {
    "ques": "Which operator is used to assign a value to a variable?",
    "a": "==",
    "b": "=",
    "c": "===",
    "d": "=>",
    "correct": "b"
  },
  {
    "ques": "How do you write an IF statement in JavaScript?",
    "a": "if i == 5 then",
    "b": "if i = 5",
    "c": "if (i == 5)",
    "d": "if i == 5 then { }",
    "correct": "c"
  },
  {
    "ques": "How can you add a comment in JavaScript?",
    "a": "<!-- This is a comment -->",
    "b": "// This is a comment",
    "c": "/* This is a comment */",
    "d": "Both B and C",
    "correct": "d"
  },
  {
    "ques": "Which method adds a new element to the end of an array?",
    "a": "add()",
    "b": "push()",
    "c": "pop()",
    "d": "append()",
    "correct": "b"
  },
  {
    "ques": "How can you detect the client's browser name?",
    "a": "navigator.appName",
    "b": "browser.name",
    "c": "client.browser",
    "d": "window.browser",
    "correct": "a"
  },
  {
    "ques": "How do you declare a function in JavaScript?",
    "a": "function = myFunction()",
    "b": "function:myFunction()",
    "c": "function myFunction()",
    "d": "declare myFunction()",
    "correct": "c"
  },
  {
    "ques": "How do you round a number to the nearest integer in JavaScript?",
    "a": "Math.round()",
    "b": "round()",
    "c": "Math.ceil()",
    "d": "Math.floor()",
    "correct": "a"
  },
  {
    "ques": "Which event occurs when the user clicks on an HTML element?",
    "a": "onchange",
    "b": "onclick",
    "c": "onmouseclick",
    "d": "onmouseover",
    "correct": "b"
  },
  {
    "ques": "How do you find the minimum of a set of numbers in JavaScript?",
    "a": "Math.min()",
    "b": "Math.minimum()",
    "c": "min()",
    "d": "minimum()",
    "correct": "a"
  },
  {
    "ques": "How do you find the largest number in JavaScript?",
    "a": "Math.max()",
    "b": "Math.maximum()",
    "c": "max()",
    "d": "maximum()",
    "correct": "a"
  },
  {
    "ques": "Which statement is used to stop a loop in JavaScript?",
    "a": "exit",
    "b": "return",
    "c": "stop",
    "d": "break",
    "correct": "d"
  },
  {
    "ques": "Which of the following is used to handle exceptions in JavaScript?",
    "a": "try-catch",
    "b": "throw",
    "c": "onError",
    "d": "Both A and B",
    "correct": "d"
  },
  {
    "ques": "Which JavaScript method is used to access an HTML element by its id?",
    "a": "getElementByClass()",
    "b": "getElementById()",
    "c": "getId()",
    "d": "querySelector()",
    "correct": "b"
  }
];

const quotes = {
  max: "Congratulations! You aced it! Keep pushing forward, greatness awaits.",
  high: "Great job! You're almost there. Stay focused and keep improving.",
  mid: "Good effort! Keep learning, and you'll get there soon.",
  low: "Don't worry about mistakes. They're proof that you're trying. Keep going!"
};



localStorage.setItem('question', JSON.stringify(question));
JSON.parse(localStorage.getItem("question"));
let i
let right
let wrong
let heigh
let quizQuestion = 1;
const quote = document.querySelector(".quote");

i = parseInt(localStorage.getItem('currentQuestion')) || 0;
right = parseInt(localStorage.getItem('CorrectAns')) || 0;
wrong = parseInt(localStorage.getItem('IncorrectAns')) || 0;
heigh = parseInt(localStorage.getItem('HeigestScore')) || 0;

if (i == question.length) {
  quizContainer.classList.add('start');
} else {
  // Ensure that you don't start with 'end' class if the quiz is not over
  totalScore.classList.remove('start');
}



const checkAswar = () => {
  ShowScore.innerText = `${quizQuestion}/${question.length}`;
  if (i < question.length) {


    const data = question[i];
    questionbox.innerText = `${data.ques}`;

    option.forEach((e) => {
      option[0].value = data.a;
      option[1].value = data.b;
      option[2].value = data.c;
      option[3].value = data.d;
    });

  } else {
    quizMainContainer.classList.remove('show')
    totalScore.classList.add('end')

  }
};

// Disable all options after one is clicked
const disableOptions = () => {
  selectOpt.forEach((opt) => {
    opt.style.pointerEvents = "none"; // Disable further clicks
  });
};

// Enable all options for the next question
const enableOptions = () => {
  selectOpt.forEach((opt) => {
    opt.style.pointerEvents = "auto"; // Re-enable clicks for new question
    opt.classList.remove("correct", "incorrect");
  });
  IconRight.forEach((icon) => {

    icon.classList.remove('right');
    icon.style.display = 'none';
    icon.innerHTML = '';

  })
};

selectOpt.forEach((opt) => {
  opt.addEventListener("click", function (e) {

    const selectedValue = opt.getAttribute("data-value");
    const correctOption = question[i].correct

    if (selectedValue === correctOption) {
      opt.classList.add("correct");
      IconRight.forEach((icon) => {
        if (opt.contains(icon)) {
          icon.classList.add('right');
          icon.style.display = 'block';
          icon.innerHTML = '&#10004';
        }
      })
      if(sound.classList.contains("mute")){
        backgroundSound.pause()
  
        }else{
  
          backgroundSound.play()
        }

      right++;

    } else {
      opt.classList.add("incorrect");
      IconRight.forEach((icon) => {
        if (opt.contains(icon)) {
          icon.classList.add('wrong');
          icon.style.display = 'block';
          icon.innerHTML = '&#x2716';
        }
      })
      if(sound.classList.contains("mute")){
      down.pause()

      }else{

        down.play()
      }
      wrong++;
    }


    const showResult = () => {
      correctAns = Math.floor((right / question.length) * 100) + '%';
      IncorrectAns = Math.floor((wrong / question.length) * 100) + '%';
      rightAns.innerHTML = correctAns;
      wrongAns.innerText = IncorrectAns;
      totalAttemptQuestion = correctOption.right;
      correctScore.innerText = `${right} / ${question.length}`;
      Progress.style.width = `${right / question.length * 100}%`;
      lowProgress.style.width = `${wrong / question.length * 100}%`;
      document.body.style.backgroundColor = "#CCE2C2"; // Reset to original background color
  quizContainer.classList.add("start");
   
      if (right === question.length) {
        quote.innerHTML = quotes.max
      }else if(right <= Math.ceil(question.length * 0.72)){
        quote.innerHTML = quotes.high       
      }else if(right >= Math.ceil(question.length * 0.4)){
        quote.innerHTML = quotes.mid       
      }else {
        quote.innerHTML = quotes.low
      }
    }


    localStorage.setItem('currentQuestion', i);
    localStorage.setItem('correctAnswer', right);
    localStorage.setItem('wrongAnswer', wrong);
    localStorage.setItem('HeigestScore', heigh);

    disableOptions();
    checkAswar();
    showResult();

  });
});

backgroundSound.pause()

down.pause();


const showResult = () => {
  correctAns = Math.floor((right / question.length) * 100) + '%';
  IncorrectAns = Math.floor((wrong / question.length) * 100) + '%';
  rightAns.innerHTML = correctAns;
  wrongAns.innerText = IncorrectAns;
  totalAttemptQuestion = correctOption.right;
  correctScore.innerText = `${right} / ${question.length}`;
  Progress.style.width = `${right / question.length * 100}%`;
  lowProgress.style.width = `${wrong / question.length * 100}%`;
  
  document.body.style.backgroundColor = "#CCE2C2"; // Reset to original background color
  if (right === question.length) {
    quote.innerHTML = quotes.max
  }
}

const timerHandler = () => {
  currenttimer = 60;


  Timer.innerHTML = `${currenttimer}s`;

  clearInterval()


  startTime = setInterval(() => {
    currenttimer--;

    Timer.innerHTML = `${currenttimer}s`
    if (currenttimer <= 15) {
      document.body.style.backgroundColor = "#D4D69F";
    }
    if (currenttimer < 10) {
      document.body.style.backgroundColor = "#DBADAD";
    }

    if (currenttimer <= 0 ) {
      clearInterval()
      quizMainContainer.classList.remove('show');
      totalScore.classList.add('end');

      document.body.style.backgroundColor = "#CCE2C2"; // Reset to original background color

      if (right === question.length) {
        quote.innerHTML = quotes.max
      }
      correctAns = Math.floor((right / question.length) * 100) + '%';
      IncorrectAns = Math.floor((wrong / question.length) * 100) + '%';
      rightAns.innerHTML = correctAns;
      wrongAns.innerText = IncorrectAns;
    }

  }, 1000);
}



nextBtn.addEventListener("click", function () {
  const data = question[i];
  if ((i < question.length)) {

    parentOpt.forEach(opt => {

      opt.parentElement.classList.remove('correct', 'incorrect');
    });

    // Hide all icons and clear their styles
    IconRight.forEach(icon => {

      icon.style.display = 'none';
      icon.classList.remove('right', 'wrong');
      icon.innerHTML = '';

    });
    i++;
    quizQuestion++
    localStorage.setItem('currentQuestion', i);
    enableOptions();
    checkAswar();
  } else {
    console.log('quiz end')
    showResult()
  }
});

ReTry.addEventListener('click', () => {
  // Remove stored values from localStorage
  localStorage.removeItem('currentQuestion');
  localStorage.removeItem('correctAnswer');
  localStorage.removeItem('wrongAnswer');
  localStorage.removeItem('HeighScore');

  // Reset the index and scores
  i = 0; // Reset the current question index
  right = 0; // Reset the correct answers count
  wrong = 0; // Reset the wrong answers count
  quizQuestion = 1 // Reset the wrong answers count
  currenttimer = 60
  // Reinitialize the quiz UI
  totalScore.classList.remove('end');
  quizContainer.classList.add("start");
  quizMainContainer.classList.add("show");

  // Enable the options for the first question
  enableOptions();

  // Show the first question again
  checkAswar();

  // Optionally reset any displayed scores or progress bars
  correctScore.innerText = `0 / ${question.length}`;
  Progress.style.width = '0%';
  lowProgress.style.width = '0%';
  rightAns.innerText = '0%';
  wrongAns.innerText = '0%';

  // Update the body background if necessary
  document.body.style.backgroundColor = "#CCE2C2"; // Reset to original background color
});

soundMute.addEventListener('click', function (e) {
  sound.classList.toggle("mute")
  soundMute.classList.toggle("pause")
  // soundMute.style.opacity = 1;
  backgroundMusic.pause()
  down.pause()
})
// soundMute.addEventListener('click', function (e) {
//   sound.classList.remove("mute")
//   soundMute.classList.remove("pause")
//   backgroundSound.pause()

//   down.pause();

// })


checkAswar();