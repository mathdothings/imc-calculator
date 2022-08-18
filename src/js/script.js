const calculateButton = document.querySelector("#calculate-button");

const inputWeight = document.querySelector("#input-weight");

const inputHeight = document.querySelector("#input-height");

const result = document.querySelector("#result");

calculateButton.addEventListener("click", () => {
  const minWeight = 5;
  const minHeight = 1;
  const weight = inputWeight.value;
  const height = inputHeight.value;
  const imc = weight / height ** 2;
  // just for debbuging proporses
  // console.log(`WEIGHT ==> Type: ${typeof weight} Value: ${weight}`);
  // console.log(`HEIGHT ==> Type: ${typeof height} Value: ${height}`);
  // console.log("imc ==> ", imc);

  if (isNaN(imc)) {
    if (weight === "" || height === "") {
      // blank values
      result.innerText = "Preencha os campos!";
      result.style.color = "orange";
      result.style.borderColor = "orange";
      result.style.borderStyle = "solid";
    } else {
      // invalid values
      result.innerText = "Valor(es) inválido(s)";
      result.style.color = "red";
      result.style.borderColor = "red";
      result.style.borderStyle = "solid";
    }
  } else {
    // invalid values
    if (weight < minWeight || height < minHeight) {
      result.innerText = "Valor(es) inválido(s)";
      result.style.color = "red";
      result.style.borderColor = "red";
      result.style.borderStyle = "double";
    } else {
      // bad values
      if (imc <= 18.5 || imc >= 25) {
        result.style.color = "red";
        result.style.borderColor = "red";
        result.innerText = imc.toFixed(1).toString();
      }
      // good values
      if (imc > 18.5 && imc < 25) {
        result.style.borderColor = "limegreen";
        result.style.color = "limegreen";
        result.innerText = imc.toFixed(1).toString();
      }
    }
  }
});
