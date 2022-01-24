const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display:  document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

// let p1Score = 0;
// let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
    if(!isGameOver) {
        player.score += 1;
    if(player.score === winningScore) {
        isGameOver = true; 
        player.display.classList.add('winner');
        opponent.display.classList.add('loser');
        player.button.disabled = true;
        opponent.button.disabled = true; 
    }
    player.display.textContent = player.score;
}
}

p1.button.addEventListener('click', function(e){
   updateScores(p1, p2);

})

p2.button.addEventListener('click', function(e){
    updateScores(p2, p1);
})

winningScoreSelect.addEventListener('click', function(e) {
    winningScore = parseInt(this.value);
    reset();
})

function reset () {
    isGameOver = false;
    for(let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('winner', 'loser');
        p.button.disabled = false;
    }

}

resetButton.addEventListener('click', reset)