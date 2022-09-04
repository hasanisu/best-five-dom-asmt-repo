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
    const playersSelectionById = document.createElement('ul');
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

