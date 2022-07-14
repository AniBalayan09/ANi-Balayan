//querySelector

const startBtn = document.querySelector('.btnStart');
const modalWindow = document.querySelector('.modal');
const newGameBtn = document.querySelector('.modal .input_btn');
const input = document.querySelector('.modal .inputcell');
const gameArea = document.querySelector('.game')
const title = document.querySelector('.area .game .title')
const controlBtn = document.querySelector('.control')
const restartBtn = document.querySelector('.btn_restart')
const quitGame = document.querySelector('.btn_quit')
const winnerWindow = document.querySelector('.winner')
const winnerText = document.querySelector('.winner h2')


//EventListeners

startBtn.addEventListener('click', openModal);
newGameBtn.addEventListener('click', createBlock);
restartBtn.addEventListener('click', restartGame);
quitGame.addEventListener('click', gameQuit);
controlBtn.style.display = 'none';



function openModal() {
    input.focus()
    modalWindow.classList.add('active')
    startBtn.style.display = 'none';
}


function createBlock(e) {
    e.preventDefault();
    var n = input.value;
    result = [];
    if (n > 7 || n < 3) return;
    for (var i = 0; i < n; i++) {
        result[i] = [];
        for (var j = 0; j < input.value; j++) {

            var div = document.createElement('div');
            div.classList.add('block');
            result[i].push(div);

            gameArea.appendChild(div);

            gameArea.style.width = `${input.value * 50}px`;
            gameArea.style.heigh = `${input.value * 50}px`;

        }
    }
    modalWindow.style.display = 'none';
    input.value = '';
    title.innerHTML = `Player X's Start`;
    title.style.fontSize = '1.2rem';
    controlBtn.style.display = 'initial';
}
var qayl = 0;

gameArea.onclick = function (e) {
    if (e.target.innerHTML) return;
    document.innerHTML = "GO X"
    if (e.target.classList == "block") {
        if (qayl % 2 == 0) {
            e.target.innerHTML = "X";
            title.innerHTML = `player O's turn`;

        } else {
            e.target.innerHTML = "O";
            title.innerHTML = `Player X's turn`;

        }
        qayl++;
    }
    checkWinner()
}
function checkWinner() {
    if (qayl == result.length ** 2) {
        winnerWindow.classList.add("active");
        winnerText.innerHTML = "DRAW";
        winnerText.innerHTML += ' <i class="fa-solid fa-face-smile"></i> '
    }
    var countX = 0, countY = 0;
    for (var j = 0; j < result.length; j++) {

        for (var i = 0; i < result.length; i++) {
            if (result[i][j].innerHTML == 'X') {
                countX++;
                console.log(countX);
                if (result.length == countX) {
                    winnerWindow.classList.add('active');
                    winnerText.innerHTML = `<i class="fa-solid fa-trophy"></i> WINNER IS X `;
                }
            } else if (result[i][j].innerHTML == 'O') {
                countY++;
                if (result.length == countY) {
                    winnerWindow.classList.add('active');
                    winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> WINNER IS O `;
                }
            }
        }
    }

    for (var j = 0; j < result.length; j++) {
        var countX = 0, countY = 0;
        for (var i = 0; i < result.length; i++) {
            if (result[i][j].innerHTML == 'X') {
                countX++;
                if (result.length == countX) {
                    winnerWindow.classList.add('active');
                    winnerText.innerHTML = `<i class="fa-solid fa-trophy"></i> Winner is X `;
                }
            } else if (result[i][j].innerHTML == 'O') {
                countY++;
                if (result.length == countY) {
                    winnerWindow.classList.add('active');
                    winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is O `;
                }
            }
        }
    }
    var countX = 0, countY = 0;
    for (var i = 0; i < result.length; i++) {
        if (result[i][i].innerHTML == 'X') {
            countX++;
            if (result.length == countX) {
                winnerWindow.classList.add('active');
                winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is X `;
            }
        } else if (result[i][i].innerHTML == 'O') {
            countY++;
            if (result.length == countY) {
                winnerWindow.classList.add('active');
                winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is O `;
            }
        }
    }
    var countX = 0, countY = 0;
    for (var j = 0; j < result.length; j++) {
        if (result[j][result.length - 1 - j].innerHTML == 'X') {
            countX++;
            if (result.length == countX) {
                winnerWindow.classList.add('active');
                winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is X `;
            }
        } else if (result[j][result.length - 1 - j].innerHTML == 'O') {
            countY++;
            if (result.length == countY) {
                winnerWindow.classList.add('active');
                winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is O `;
            }
        }
    }
}
function restartGame() {
    location.reload()
    }
    
    function gameQuit() {
    window.close()
    location.reload()
    }