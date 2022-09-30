addEventListener("click", (e) => console.log(e.target.tagName));

let inputText = document.getElementById("addText");

inputText.addEventListener("click", getText);

function getText() {
  var getT = document.getElementById("input-text").value;
  alert(getT);
}

let inputNumberArea1 = document.getElementById("cleanNumberArea1");

inputNumberArea1.addEventListener("click", cleanNumberArea1);

function cleanNumberArea1() {
  var getNumber = document.getElementById("numberArea1");
  getNumber.value = "";
}

let inputNumberArea2 = document.getElementById("NumberArea2");

let sumNumberAreas = document.getElementById("sumNumberButton");

sumNumberAreas.addEventListener("click", sumNumbers);

function sumNumbers() {
  var getNumber1 = parseInt(document.getElementById("numberArea1").value);
  var getNumber2 = parseInt(document.getElementById("numberArea2").value);
  // if (isNaN(getNumber1.value) == true) getNumber1 = 0;
  // if (isNaN(getNumber2.value) == true) getNumber2 = 0;
  var sumResult = getNumber1 + getNumber2;
  document.getElementById("numberArea2").value = sumResult;
}
