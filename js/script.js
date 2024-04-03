let radioReset = document.querySelector("#radio-reset-button");
radioReset.addEventListener("click", resetRadioButtons);
// Here I am getting all the radio elements and setting them to false individually
// inside a for loop
function resetRadioButtons() {
  let radioButtons = document.querySelectorAll("input[type='radio']");
  for (let radioButton of radioButtons) {
    radioButton.checked = false;
  }
}
