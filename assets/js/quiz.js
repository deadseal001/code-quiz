//define quiz array
var quiz = [
  {
    //1
    q: "Inside which HTML element do we put the JavaScript?",
    a: "1. <scripting>",
    b: "2. <javascript>",
    c: "3. <script>",
    d: "4. <js>",
    answer: 3,
  },
  {
    //2
    q: "Where is the correct place to insert a JavaScript?",
    a: "1. Both the <head> section and the <body> section are correct",
    b: "2. The <head> section",
    c: "3. The <body> section",
    d: "4. The <footer> section",
    answer: 1,
  },
  {
    //3
    q: "How do you write “Hello World” in an alert Box?",
    a: "1. alert(“Hello World”);",
    b: "2. msg(“Hello World”);",
    c: "3. alertBox(“Hello World:);",
    d: "4. msgBox(“Hello World:);",
    answer: 1,
  },
  {
    //4
    q: "How do you call a function named “myFuncgtion”?",
    a: "1. call myFunction()",
    b: "2. call function myFunction()",
    c: "3. myFunction()",
    d: "4. function myFunction()",
    answer: 3,
  },
  {
    //5
    q: "How to write an IF statement in JavaScript?",
    a: "1. if (i == 5)",
    b: "2. if i = 5",
    c: "3. if i == 5 then",
    d: "4. If i=5 then",
    answer: 1,
  },
  {
    //6
    q: "How to write an IF statement for executing some code if “i” is NOT equal to 5?",
    a: "1. if i =! 5 then",
    b: "2. if (i != 5)",
    c: "3. if (i<> 5)",
    d: "4. If i<>5",
    answer: 2,
  },
  {
    //7
    q: "How does a WHILE loop start?",
    a: "1. while (i <= 10; i ++ )",
    b: "2. while i = 1 to 10",
    c: "3. while (i <= 10)",
    d: "4. while (i = 0, i<=10, i++)",
    answer: 3,
  },
  {
    //8
    q: "How do you add a comment in a JavaScript",
    a: "1. // This is a comment",
    b: "2. ‘This is a comment",
    c: "3. <!—This is a comment__>",
    d: "4. /This is a comment/",
    answer: 1,
  },
  {
    //9
    q: "How do you round the number 7.25, to the nearest integer?",
    a: "1. Math.round(7.25)",
    b: "2. Math.rnd(7.25)",
    c: "3. round(7.25)",
    d: "4. rnd(7.25)",
    answer: 1,
  },
  {
    //10
    q: "How do you find the number with the highest value of x and y?",
    a: "1. top(x, y)",
    b: "2. Math.ceil(x, y)",
    c: "3. ceil(x, y)",
    d: "4. Math.max(x, y)",
    answer: 4,
  },
];

//function start quiz
function startQuiz() {
  // define some variables needed in the function
  var mainEl = document.querySelector(".main");
  var titleEl = document.querySelector(".Title");
  var timerEl = document.querySelector(".countdown");
  var noticeEl = document.querySelector(".notice");
  var answer = 0;
  var score = 0;
  var seq = 0;
  var savedscores = [];
  var finalScoreEl = document.createElement("p");
  var inputInEl = document.createElement("div");
  var ini = "";
  var timeLeft = 50;

  //timer
  var timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      timerEl.textContent = "Time: " + timeLeft + " s";
      timeLeft = timeLeft - 1;
    } else {
      timerEl.textContent = "Time: 0 s";
      clearInterval(timeInterval);
      ending();
      return;
    }
  }, 1000);

  //remove unused elements
  titleEl.textContent = "";
  noticeEl.remove();
  startBtEl.remove();

  //define choices as buttons
  var choice1El = document.createElement("button");
  var choice2El = document.createElement("button");
  var choice3El = document.createElement("button");
  var choice4El = document.createElement("button");

  //set attribute and append to
  choice1El.className = "choices";
  choice1El.setAttribute("data-choice-id", 1);
  choice2El.className = "choices";
  choice2El.setAttribute("data-choice-id", 2);
  choice3El.className = "choices";
  choice3El.setAttribute("data-choice-id", 3);
  choice4El.className = "choices";
  choice4El.setAttribute("data-choice-id", 4);
  mainEl.appendChild(choice1El);
  mainEl.appendChild(choice2El);
  mainEl.appendChild(choice3El);
  mainEl.appendChild(choice4El);

  //function to add questions and check if the answer is right.
  function newQuestion(event) {
    if (seq === 0) {
      //nothing to check when the first question shows.
    } else if (seq === 10) {
      //
      if (answer == event.target.getAttribute("data-choice-id")) {
        score += 10;
      }
      //go to function ending() after the last question
      ending();
      return;
    } else {
      if (answer == event.target.getAttribute("data-choice-id")) {
        score += 10;
      } else {
        timeLeft -= 10;
      }
    }
    //quote question from array
    mainEl.className = "main mainChoice";
    titleEl.textContent = quiz[seq].q;
    choice1El.textContent = quiz[seq].a;
    choice2El.textContent = quiz[seq].b;
    choice3El.textContent = quiz[seq].c;
    choice4El.textContent = quiz[seq].d;
    answer = quiz[seq].answer;
    seq = seq + 1;
  }

//function ending where shows score and user can input their name
  function ending() {
    clearInterval(timeInterval);
    titleEl.textContent = "All done!";
    choice1El.remove();
    choice2El.remove();
    choice3El.remove();
    choice4El.remove();
    var finalScoreEl = document.createElement("p");
    finalScoreEl.className = "notice";
    finalScoreEl.textContent =
      "Your final score is " + Math.max(0, score + timeLeft) + ".";
    if (timeLeft >= 0) {
      timerEl.textContent = "Time: " + timeLeft + " s";
    } else {
      timerEl.textContent = "Time: 0 s";
    }
    var inputInEl = document.createElement("div");
    inputInEl.className = "initial";

    var inputBoxEl = document.createElement("input");
    inputBoxEl.className = "inputB";
    inputBoxEl.type = "text";
    inputBoxEl.placeholder = "Enter your initial";
    var inputBtEl = document.createElement("button");
    inputBtEl.className = "startBtn";
    inputBtEl.textContent = "Submit";
    mainEl.appendChild(finalScoreEl);
    mainEl.appendChild(inputInEl);
    inputInEl.appendChild(inputBoxEl);
    inputInEl.appendChild(inputBtEl);

    inputBtEl.addEventListener("click", highScore);
    return;
  }

  var scoreListEl = document.createElement("ol");
  scoreListEl.className = "scoreList";

  //function saveScore
  function saveScores() {
    localStorage.setItem("scores", JSON.stringify(savedscores));
  }
  //function loadsocre
  function loadScores() {
    savedscores = localStorage.getItem("scores");
    if (!savedscores) {
      highScore = []; 
      return false;
    }
  }

  //function updatescore, final score is answer + timeLeft
  function updatescore() {
    savedscores = JSON.parse(savedscores);
    var scoresUpdate = [];
    var add = 1;
    if (!savedscores) {
      scoresUpdate.push({ n: ini, s: score + timeLeft });
    } else {
      for (var i = 0; i < savedscores.length; i++) {
        if (score + timeLeft > savedscores[i].s && add === 1) {
          scoresUpdate.push({ n: ini, s: score + timeLeft });
          scoresUpdate.push(savedscores[i]);
          add = 2;
        } else {
          scoresUpdate.push(savedscores[i]);
        }
      }
      if (score + timeLeft < savedscores[savedscores.length - 1].s) {
        scoresUpdate.push({ n: ini, s: score + timeLeft });
      }
      console.log(scoresUpdate);
    }
    savedscores = scoresUpdate;
  }

  var highscore = [];
  var scoreEl = document.createElement("li");
  scoreEl.className = "scoreEl";

  function highScore() {
    ini = document.querySelector("input[class='inputB']").value;
    titleEl.textContent = "High Scores";
    var finalScoreEl = document.querySelector(".notice");
    finalScoreEl.remove(); 
    var inputInEl = document.querySelector(".initial");
    inputInEl.remove(); 
    loadScores();
    updatescore();
    saveScores();
    function addElement(na, sc) {
      var listEl = document.createElement("li");
      listEl.textContent = na + "  -  " + sc;
      scoreListEl.appendChild(listEl);
    }
    mainEl.appendChild(scoreListEl);
    for (var i = 0; i < savedscores.length; i++) {
      var na = savedscores[i].n;
      var sc = Math.max(savedscores[i].s, 0);
      addElement(na, sc);
    }
    var backBtnEl=document.createElement("button");
    backBtnEl.className="startBtn backBtn";
    backBtnEl.textContent="Go back";
    mainEl.appendChild(backBtnEl);
    backBtnEl.addEventListener("click",reloadPage);
    var clearBtn=document.createElement("button");
    clearBtn.className="startBtn clear Btn";
    clearBtn.textContent="Clear high scores";
    mainEl.appendChild(clearBtn);
    clearBtn.addEventListener("click",function(){
      localStorage.removeItem("scores");
      reloadPage();
    });
  };

  newQuestion(0);
  choice1El.addEventListener("click", newQuestion);
  choice2El.addEventListener("click", newQuestion);
  choice3El.addEventListener("click", newQuestion);
  choice4El.addEventListener("click", newQuestion);
}

// function reload page
function reloadPage() {
  location.reload(true);
  return false;
}



//get references to the start button
var startBtEl = document.querySelector(".startBtn");
startBtEl.addEventListener("click", startQuiz);
