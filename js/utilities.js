function totalInputValueById (elementId){
    const playerWage = document.getElementById(elementId);
    const playerWageInputValueString = playerWage.value;
    const playerWageInput = parseFloat(playerWageInputValueString);
    return playerWageInput;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId)
    textElement.innerText = newValue;
}

function costingCalculation (elementId){
    const calculationById = document.getElementById(elementId);
    const calculationValueByString = calculationById.innerText;
    const calculationAmount = parseFloat(calculationValueByString);
    return calculationAmount;
}


function myFunction(elementId) {
  document.getElementById(elementId).disabled = true;
}

