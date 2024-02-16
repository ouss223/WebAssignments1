let diff_label = document.getElementById("diff_label");
let diff = document.getElementById("diff");
let diff_text = document.getElementById("difficulty");
let input = document.getElementById("input");
let result = document.getElementById("result");
let remaining = document.getElementById("remaining");
let tryElement = document.getElementById("try");
let relancement = document.getElementById("relance");


const tries = [10, 5, 3];
const difficulties = ["Easy", "Medium", "Hard"];
let diff_value = diff.value;
let win_state = true;


diff_text.style.visibility = "visible";

diff.oninput = function () {
  diff_text.style.visibility = "visible";
  diff_value = this.value;
  diff_text.innerHTML = "Difficulty: " + difficulties[diff_value-1];
};

let button = document.getElementById("start");

button.onclick = function () {
  const number_to_guess = Math.floor(Math.random() * 100) + 1;
  prompt("SPOILER ! : The number to guess is: " + number_to_guess);

  diff_label.style.visibility = "hidden";
  diff.style.visibility = "hidden";
  diff_text.style.visibility = "hidden";
  button.style.visibility = "hidden";
  let chances = tries[diff_value - 1];
  input.style.visibility = "visible";
  tryElement.style.visibility = "visible";
  result.style.visibility = "visible";
  remaining.style.visibility = "visible";
  remaining.innerHTML = "Remaining tries: " + chances;
  tryElement.onclick = function () {

    if (number_to_guess == input.value) {
      win_state = true;
      endGame(result, win_state, number_to_guess);
      return;
    }
    if (chances == 1) {
      win_state = false;
      endGame(result, win_state, number_to_guess);
      return;
    }
    
    let proper = guess(input.value, result, number_to_guess);
    if (proper) {
      --chances;
    }
    remaining.innerHTML = "Remaining tries: " + chances;
    
    input.value = "";
  };
};

function endGame(result, win_state, number_to_guess) {
    tryElement.style.disabled = true;
    remaining.innerHTML = "";
    remaining.style.visibility = "hidden";
  if (win_state) {
    result.innerHTML = "Congratulations! You guessed the number!";
    result.style.color = "green";
  } else {
    result.innerHTML = "You lost! The number was " + number_to_guess;
    result.style.color = "red";
  }
  relancement.style.visibility = "visible";
}

relancement.onclick = function () {
    input.value = "";
    remaining.innerHTML = "";
    result.innerHTML = "";

  input.style.visibility = "hidden";
  result.style.visibility = "hidden";
  relancement.style.visibility = "hidden";
  tryElement.style.visibility = "hidden";
  diff_label.style.visibility = "visible";
  diff.style.visibility = "visible";
  button.style.visibility = "visible";
  diff_text.style.visibility = "visible";
  diff_text.innerHTML = "Difficulty: medium";
};

function guess(input_value, result,number_to_guess) {
  if (input_value === "") {
    result.innerHTML = "Please enter a number.";
    result.style.color = "red";
    return false;
  }
  if (isNaN(input_value)) {
    result.innerHTML = "Invalid input. Please enter a number.";
    result.style.color = "red";
    return false;
  }
  input_value = parseInt(input_value);
    
    if (input_value < number_to_guess) {
        result.innerHTML = "The number is higher.";
        result.style.color = "red";
    }
    if (input_value > number_to_guess) {
        result.innerHTML = "The number is lower.";
        result.style.color = "red";
    }

  return true;
}
