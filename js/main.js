let styleThemes = document.getElementById("styleThemes");
let themes = {
  1: "css/theme1.css",
  2: "css/theme2.css",
  3: "css/theme3.css"
};

function theTheme(numberTheme) {
  styleThemes.href = themes[numberTheme];
}

let inputCalc = document.getElementById("inputCalc");

function textinput(val) {
  inputCalc.value += val;
}

function reset() {
  inputCalc.value = "";
}

function del() {
  inputCalc.value = inputCalc.value.slice(0, -1);
}

function calculate() {
  try {
    inputCalc.value = eval(inputCalc.value);
  } catch (e) {
    inputCalc.value = "Error";
  }
}