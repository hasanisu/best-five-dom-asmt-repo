// calculation section

document.getElementById('btn-calculation').addEventListener('click', function(){
    
    const playerPaybleWage = totalInputValueById('player-wage')

    const totalList = document.getElementById('player-selection');
    const totalPlayerList = totalList.childElementCount;
    const playersExpenses = parseInt(totalPlayerList);


    const totalPlayerWage = playerPaybleWage * playersExpenses;

    const playerExpenses = costingCalculation('toal-wage');
    setTextElementValueById('toal-wage', totalPlayerWage);

})


// total expenses section
document.getElementById('btn-expenses').addEventListener('click', function(){
    const mangerExpenses = totalInputValueById('manger-expenses');
    const coachExpenses = totalInputValueById('coach-expenses');  
     
    const playerWageInput = costingCalculation('toal-wage');
    
    const totalExpenses = mangerExpenses + coachExpenses + playerWageInput;
    
    setTextElementValueById('total-expenses', totalExpenses);
})