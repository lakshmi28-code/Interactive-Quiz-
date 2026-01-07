var selectedSet = [];
var current = 0;
var score = 0;
var chosenCategory = "";

function showStart(type){
  chosenCategory = type; // remember category
  document.getElementById("category-box").style.display = "none";
  document.getElementById("start-box").style.display = "block";
}

function startQuiz(){
  document.getElementById("start-box").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  current = 0;
  score = 0;

  // choose the right set
  if(chosenCategory === "gk"){ selectedSet = gkQuestions; }
  else if(chosenCategory === "social"){ selectedSet = socialQuestions; }
  else if(chosenCategory === "science"){ selectedSet = scienceQuestions; }
  else if(chosenCategory === "maths"){ selectedSet = mathsQuestions; }
  else if(chosenCategory === "computer"){ selectedSet = computerQuestions; }
  else if(chosenCategory === "sports"){ selectedSet = sportsQuestions; }
  else if(chosenCategory === "music"){ selectedSet = musicQuestions; }
  else if(chosenCategory === "food"){ selectedSet = foodQuestions; }
  else if(chosenCategory === "temple"){ selectedSet = templeQuestions; }
  else if(chosenCategory === "travel"){ selectedSet = travelQuestions; }
  else if(chosenCategory === "rapid"){ selectedSet = rapidQuestions; }
  else { selectedSet = allQuestions; }

  // show first question
  showQuestion();
}

function showQuestion(){
  if(selectedSet.length === 0){
    document.getElementById("question").innerText = "No questions available!";
    return;
  }

  document.getElementById("question").innerText = selectedSet[current].q;
  var optBox = document.getElementById("options");
  optBox.innerHTML = "";
  document.getElementById("feedback").innerText = "";

  selectedSet[current].options.forEach(function(opt){
    var btn = document.createElement("div");
    btn.innerText = opt;
    btn.className = "option";
    btn.onclick = function(){
      if(opt === selectedSet[current].answer){
        score++;
        document.getElementById("feedback").innerText = "Correct!";
        document.getElementById("feedback").style.color = "green";
      } else {
        document.getElementById("feedback").innerText = "Not Correct!";
        document.getElementById("feedback").style.color = "red";
      }
      document.querySelectorAll(".option").forEach(function(o){
        o.style.pointerEvents = "none";
      });
    };
    optBox.appendChild(btn);
  });
}

document.getElementById("next").onclick = function(){
  current++;
  if(current < selectedSet.length){
    showQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML =
      "<h2>Quiz Finished</h2><p>Your Score: "+score+"/"+selectedSet.length+"</p>";
  }
};
