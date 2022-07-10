const poundsInput = document.querySelector("#pounds > input");
const gramsInput = document.querySelector("#grams > input");
const kilogramsInput = document.querySelector("#kilograms > input");
const ouncesInput = document.querySelector("#ounces > input");

function roundNum(num) {
  return Math.round(num * 100) / 100;
}

function poundToGramToKiloToOunce() {
  const pValue = parseFloat(poundsInput.value);
  const gValue = pValue * 453.59237;
  const kValue = pValue / 2.2046;
  const oValue = pValue * 16;
  gramsInput.value = roundNum(gValue);
  kilogramsInput.value = roundNum(kValue);
  ouncesInput.value = roundNum(oValue);
}

function gramToPoundToKilogramToOunce() {
  const gValue = parseFloat(gramsInput.value);
  const pValue = gValue * 0.0022046226;
  const kValue = gValue / 1000;
  const oValue = gValue / 28.34952;
  poundsInput.value = roundNum(pValue);
  kilogramsInput.value = roundNum(kValue);
  ouncesInput.value = roundNum(oValue);
}

function kiloToPoundToGramToOunce() {
  const kValue = parseFloat(kilogramsInput.value);
  const pValue = kValue * 2.2046;
  const gValue = kValue * 1000;
  const oValue = kValue / 0.02834952;

  poundsInput.value = roundNum(pValue);
  gramsInput.value = roundNum(gValue);
  ouncesInput.value = roundNum(oValue);
}

function ounceToPoundToGramToKilo() {
  const oValue = parseFloat(ouncesInput.value);
  const pValue = oValue * 16;
  const gValue = oValue * 28.34952;
  const kValue = oValue / 35.274;
  poundsInput.value = roundNum(pValue);
  gramsInput.value = roundNum(gValue);
  kilogramsInput.value = roundNum(kValue);
  console.log(pValue, gValue, kValue);
}

poundsInput.addEventListener("input", poundToGramToKiloToOunce);
gramsInput.addEventListener("input", gramToPoundToKilogramToOunce);
kilogramsInput.addEventListener("input", kiloToPoundToGramToOunce);
ouncesInput.addEventListener("input", ounceToPoundToGramToKilo);
