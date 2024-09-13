function diceClick() {
    var number = Math.floor(Math.random() * 6) + 1;
    var diceImg = document.querySelector('#dice img');

    
    diceImg.src = './img/' + number + '.png';
}

document.getElementById('dice').addEventListener('click', diceClick);