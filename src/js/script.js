const inputWeight = document.getElementById("input-weight");
const inputHeight = document.getElementById("input-height");
const calculateButton = document.getElementById("calculate-button");
const result = document.getElementById("result");

// função que envia o resultado do cálculo do imc
function sendResultImc() {
  const imc = calculateImc()

  result.style.borderColor = "limegreen";
  result.style.color = "limegreen";
  result.innerText = imc.toFixed(1);
}

// função que calcula o IMC
function calculateImc() {
  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);
  const imc = weight / height ** 2;
  return imc
}

// função que valida o valor dos inputs de altura e peso para desabilitar o botão
function handleChange() {
  const height = Number(inputHeight.value);
  const weight = Number(inputWeight.value);
  const MIN_WEIGHT = 5;
  const MIN_HEIGHT = 1;
  height < MIN_HEIGHT || weight < MIN_WEIGHT ? calculateButton.disabled = true : calculateButton.disabled = false
}


