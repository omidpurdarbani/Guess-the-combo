const MainKey = document.querySelector("button");
const GameArea = document.querySelector(".game");
const Done = document.querySelector(".done");
const b = document.querySelector(".b");
const info = document.querySelector(".info");
let numOFguess = document.createElement("h2");
let gameStatus = false;
const numbers = document.querySelectorAll(".elementNUM");

var reset = 0;
var guess = 0;
var record = 0;
var first=true;

MainKey.addEventListener("click", myfunction);
 
function myfunction() {
  if (!gameStatus) {
    modelmaker();

    MainKey.innerHTML = "Check";

    numOFguess.innerHTML = "Number of guess : " + guess + "<br>Best record : " + record;
    numOFguess.style.color = "white";
    info.appendChild(numOFguess);
    gameStatus = true;
  } else {
    guess++;
    numOFguess.innerHTML = "Number of guess : " + guess + "<br>Best record : " + record;

    logic();

    if (reset == 5) {
      
      if (first) {
        record=guess;
        first=false;
      }else{
        
        if (record > guess) {
          record = guess ;
        }
        
      }
      
      
      numOFguess.innerHTML = "Number of guess : " + guess + "<br>Best record : " + record;
    Done.innerHTML = "";
      let done = document.createElement("h1");
      done.innerHTML =
        "Congratulations you guess correct<br>Number of guess : " +
        guess +
        '<br><p style="font-size: 0.7em;">* guess the combo in the least number *</p>';
      done.style.color = "white";
      Done.appendChild(done);

      MainKey.removeEventListener("click", myfunction);

      MainKey.innerHTML = "Reset";

      MainKey.addEventListener("click", resetF);
    }
  }

  function resetF() {
    
    
    
    
    
    reset = 0;
    guess = 0;

    let numbers = document.querySelectorAll(".elementNUM");
    for (let i = 0; i < numbers.length; i++) {
      numbers[i].style.backgroundColor = "white";
      numbers[i].readOnly = false;

      numbers[i].correct = Math.floor(Math.random() * 10);
      numbers[i].value = 0;
    }
    
    
    
    
    numOFguess.innerHTML = "Number of guess : " + guess + "<br>Best record : " + record;
    Done.innerHTML = "";

    MainKey.removeEventListener("click", resetF);
    MainKey.innerHTML = "Check";

    MainKey.addEventListener("click", myfunction);
        
  }

  function logic() {
    const numbers = document.querySelectorAll(".elementNUM");
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].value == numbers[i].correct) {
        if (numbers[i].style.backgroundColor != "green") {
          numbers[i].style.backgroundColor = "green";

          numbers[i].readOnly = true;

          reset++;
        }
      } else if (numbers[i].value > numbers[i].correct) {
        numbers[i].style.backgroundColor = "red";
      } else if (numbers[i].value < numbers[i].correct) {
        numbers[i].style.backgroundColor = "blue";
      }
    }
  }

  function modelmaker() {
    for (let x = 0; x < 5; x++) {
      let elementNUM = document.createElement("input");

      elementNUM.type = "number";
      elementNUM.max = 9;
      elementNUM.min = 0;
      elementNUM.order = x;
      elementNUM.size = 1;
      elementNUM.style.width = "50px";
      elementNUM.style.fontSize = "2em";
      elementNUM.style.borderRadius = "20%";
      elementNUM.correct = Math.floor(Math.random() * 10);
      elementNUM.value = 0;

      elementNUM.classList.add("elementNUM");

      GameArea.appendChild(elementNUM);
    }
  }
}
