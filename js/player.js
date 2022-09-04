let count = 0;


document.getElementById('btn-first-selction').addEventListener('click', function(){
    count++;
    const playersName = document.getElementById('player-name-m').innerText;
    
    
    const playerSelection = document.getElementById('player-selection');
    const playersSelectionById = document.createElement('ul');
    playersSelectionById.innerHTML=`
    <th scope="row">${count}.</th>
    <td>${playersName}</td>
    `;
    playerSelection.appendChild(playersSelectionById);
})
document.getElementById('btn-second-selction').addEventListener('click', function(){
    count++;
    const playersName = document.getElementById('player-name-n').innerText;
    
    const playerSelection = document.getElementById('player-selection');
    const playersSelectionById = document.createElement('ul');
    playersSelectionById.innerHTML=`
    <th scope="row">${count}.</th>
    <td>${playersName}</td>
    `;
    playerSelection.appendChild(playersSelectionById);
})
document.getElementById('btn-third-selction').addEventListener('click', function(){
    count++;
    const playersName = document.getElementById('player-name-b').innerText;
    
    const playerSelection = document.getElementById('player-selection');
    const playersSelectionById = document.createElement('ul');
    playersSelectionById.innerHTML=`
    <th scope="row">${count}.</th>
    <td>${playersName}</td>
    `;
    playerSelection.appendChild(playersSelectionById);
})
document.getElementById('btn-fourth-selction').addEventListener('click', function(){
    count++;
    const playersName = document.getElementById('player-name-s').innerText;
    
    const playerSelection = document.getElementById('player-selection');
    const playersSelectionById = document.createElement('ul');
    playersSelectionById.innerHTML=`
    <th scope="row">${count}.</th>
    <td>${playersName}</td>
    `;
    playerSelection.appendChild(playersSelectionById);
})
document.getElementById('btn-fifth-selction').addEventListener('click', function(){
    count++;
    const playersName = document.getElementById('player-name-r').innerText;
    
    const playerSelection = document.getElementById('player-selection');
    const playersSelectionById = document.createElement('li');
    playersSelectionById.innerHTML=`
    <th scope="row">${count}.</th>
    <td>${playersName}</td>
    `;
    playerSelection.appendChild(playersSelectionById);
})
document.getElementById('btn-sixth-selction').addEventListener('click', function(){
    count++;
    const playersName = document.getElementById('player-name-o').innerText;
    
    const playerSelection = document.getElementById('player-selection');
    const playersSelectionById = document.createElement('ul');
    playersSelectionById.innerHTML=`
    <th scope="row">${count}.</th>
    <td>${playersName}</td>
    `;
    playerSelection.appendChild(playersSelectionById);
})

// const totalList = document.getElementById('player-selection').childElementCount;
// console.log(typeof totalList);

// calculation section


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

// function getTextElementValueById(elementId){
//     const textElement = document.getElementById(elementId);
//     const textElementValueString = textElement.innerText;
//     const textElementValue = parseFloat(textElementValueString);
//     return textElementValue;
// }

document.getElementById('btn-calculation').addEventListener('click', function(){
    
    const playerPaybleWage = totalInputValueById('player-wage')

    const totalList = document.getElementById('player-selection');
    const totalPlayerList = totalList.childElementCount;
    const playersExpenses = parseInt(totalPlayerList);

    const totalPlayerWage = playerPaybleWage * playersExpenses;


    const totalWageValueById = document.getElementById('toal-wage');
    const totalWageByIdString = totalWageValueById.innerText;
    const totalWageById = parseFloat(totalWageByIdString);
    totalWageValueById.innerText = totalPlayerWage;
   
})


// total expenses section
document.getElementById('btn-expenses').addEventListener('click', function(){
    const mangerExpenses = totalInputValueById('manger-expenses');
    const coachExpenses = totalInputValueById('coach-expenses');  
     


    const totalWageValueById = document.getElementById('toal-wage');
    const totalWageByIdString = totalWageValueById.innerText;
    const totalWageById = parseFloat(totalWageByIdString);
    

    const totalExpensesValueById = document.getElementById('total-expenses');
    const totalExpensesValueString = totalExpensesValueById.innerText;
    const totalExpensesValue = parseFloat(totalExpensesValueString);
    

    const totalExpenses = mangerExpenses + coachExpenses + totalWageById;
    totalExpensesValueById.innerText = totalExpenses;
})