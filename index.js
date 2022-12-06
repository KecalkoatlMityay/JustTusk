// var buttonPlus = document.getElementById("buttonPlus");
// var buttonMinus = document.getElementById("buttonMinus");
// var buttonMultiply = document.getElementById("buttonMultiply");
// var buttonDivide = document.getElementById("buttonDivide");

var operationButtons = document.getElementsByClassName("operation-buttons");

var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");

function makeOperationCode(operationCode) {
  var number1 = Number(input1.value);
  var number2 = Number(input2.value);

  if (operationCode === "+") {
    var result = number1 + number2;
  } else if (operationCode === "-") {
    var result = number1 - number2;
  } else if (operationCode === "*") {
    var result = number1 * number2;
  } else if (operationCode === "/") {
    var result = number1 / number2;
  } else {
    window.alert("Operation is unknown");
  }

  alert(result);
}

function onOperationButtonClick(eventObject) {
  var clickedElement = eventObject.currentTarget;
  var operation = clickedElement.innerHTML;
  makeOperationCode(operation);
}

for (var i = 0; i < operationButtons.length; i++) {
  var button = operationButtons[i];
  button.addEventListener("click", onOperationButtonClick);
}

// buttonPlus.addEventListener("click", onOperationButtonClick);
// buttonMinus.addEventListener("click", onOperationButtonClick);
// buttonMultiply.addEventListener("click", onOperationButtonClick);
// buttonDivide.addEventListener("click", onOperationButtonClick);
