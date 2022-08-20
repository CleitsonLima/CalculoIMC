function start() {
  var buttonCalcular = document.querySelector("#buttoncalcular");
  buttonCalcular.addEventListener("click", handleButtonClick);

  var inputPeso = document.querySelector("#input-weight");
  var inputAltura = document.querySelector("#input-height");

  inputPeso.addEventListener("input", handleButtonClick);
  inputAltura.addEventListener("input", handleButtonClick);

  handleButtonClick();
}

function calcularImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputPeso = document.querySelector("#input-weight");
  var inputAltura = document.querySelector("#input-height");
  var imcResult = document.querySelector("#imc-result");
  var imctotal = document.querySelector("#imc-text");
  

  var weight = Number(inputPeso.value);
  var height = Number(inputAltura.value);

  var imc = calcularImc(weight, height);
  var imcFormatado = imc.toFixed(2).replace(".", ",");

  imcResult.textContent = imcFormatado;
  


  if (imc>=16 && imc<=16.99) {
    imctotal.textContent = "Muito abaixo do peso";
  } else if (imc >= 17 && imc <= 18.49) {
    imctotal.textContent = "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 24.99) {
    imctotal.textContent = "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    imctotal.textContent = "Acima do peso";
  } else if (imc >= 30 && imc <= 34.99) {
    imctotal.textContent = "Obesidade grau I";
  } else if (imc >= 35 && imc <= 40) {
    imctotal.textContent = "Obesidade grau II";
  } else if (imc >40.01) {
    imctotal.textContent = "Obesidade grau III";
  } else {
    imctotal.textContent = "inválido";
  } 
  

}




start();
