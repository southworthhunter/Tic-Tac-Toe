let body = document.getElementById('body');
let start = document.getElementById('start');
let submit = document.querySelector('#submit');
let home = document.querySelector('#home');
let board = document.getElementById('grid-container');
let f1 = document.getElementById('f1');
let f2 = document.getElementById('f2');
let f3 = document.getElementById('f3');
let f4 = document.getElementById('f4');
let f5 = document.getElementById('f5');
let f6 = document.getElementById('f6');
let f7 = document.getElementById('f7');
let f8 = document.getElementById('f8');
let f9 = document.getElementById('f9');
let newround = document.getElementById('newround');
let restart = document.getElementById('restart');
let youwon = document.getElementById('youwon');
let winnerName = document.getElementById('winnerName');
let testingp1 = document.getElementById('testingp1');
let testingp2 = document.getElementById('testingp2');
let winner = document.getElementById('winner');
let pTurns = document.getElementById('pTurns');
let homepage = document.getElementById('homepage');
let tic2 = document.getElementById('tic2');
let header = document.getElementById('header');
let gamepage = document.getElementById('gamepage');
let winPage = document.getElementById('winPage');
const players = document.querySelector('#players');
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');
let playaInput = document.getElementById('playaInput');
let playa2Input = document.getElementById('playa2Input');
function p1() {
    if(player1.value.length > 0){
        let a = document.getElementById('player1');
        let b = document.getElementById('p1Score');
        b.value = a.value;
    } else if(player1.value.length == 0){
        return p1Score.innerHTML = '';
    }
}
function p2(){
    if(player2.value.length > 0){
        let a = document.getElementById('player2');
        let b = document.getElementById('p2Score');
        b.value = a.value;
    } else if(player2.value.length <= 0){
        return p2Score.innerHTML = '';
    }

}
let score1value = 0;
let score2value = 0;
function changeScore() {
        score1.innerHTML = score1value;
        score2.innerHTML = score2value;
}
document.getElementById('player1').addEventListener('keyup', p1);
document.getElementById('player2').addEventListener('keyup', p2);
submit.addEventListener('click', begin);
home.addEventListener('click', homeFunc);
function begin() {
    homepage.style.display = 'none';
    gamepage.style.display = 'flex';
    sync();
    changeScore();
    newGame();
    xTurn();
}
function homeFunc() {
    homepage.style.display = 'flex';
    gamepage.style.display = 'none';
    winPage.style.display = 'none';
    clearBoard();
    clearTurn(f1);
    clearTurn(f2);
    clearTurn(f3);
    clearTurn(f4);
    clearTurn(f5);
    clearTurn(f6);
    clearTurn(f7);
    clearTurn(f8);
    clearTurn(f9);
    xTurn();
    player1.value = '';
    player2.value = '';
    score1value = 0;
    score2value = 0;
}
function sync() {
    if(player1.value.length > 0){
        playaInput.innerHTML = player1.value;
    } else if(player1.value.length == 0){
        playaInput.innerHTML = 'Player 1';
    }
    if(player2.value.length > 0){
        playa2Input.innerHTML = player2.value;
    } else if (player2.value.length == 0){
        playa2Input.innerHTML = 'Player 2';
    }
}
let playerTurn = '';
function newGame() {
    playerTurn = 1;
}
function clearTurn(elem) {
    elem.classList.remove('none');
}
function oTurn() {
    f1.classList.remove('x');
    f1.classList.add('o');
    f2.classList.remove('x');
    f2.classList.add('o');
    f3.classList.remove('x');
    f3.classList.add('o');
    f4.classList.remove('x');
    f4.classList.add('o');
    f5.classList.remove('x');
    f5.classList.add('o');
    f6.classList.remove('x');
    f6.classList.add('o');
    f7.classList.remove('x');
    f7.classList.add('o');
    f8.classList.remove('x');
    f8.classList.add('o');
    f9.classList.remove('x');
    f9.classList.add('o');
}
function xTurn() {
    f1.classList.remove('o');
    f1.classList.add('x');
    f2.classList.remove('o');
    f2.classList.add('x');
    f3.classList.remove('o');
    f3.classList.add('x');
    f4.classList.remove('o');
    f4.classList.add('x');
    f5.classList.remove('o');
    f5.classList.add('x');
    f6.classList.remove('o');
    f6.classList.add('x');
    f7.classList.remove('o');
    f7.classList.add('x');
    f8.classList.remove('o');
    f8.classList.add('x');
    f9.classList.remove('o');
    f9.classList.add('x');
}
function noneTurn() {
    f1.classList.remove('x');
    f1.classList.remove('o');
    f1.classList.add('none');
    f2.classList.remove('x');
    f2.classList.remove('o');
    f2.classList.add('none');
    f3.classList.remove('x');
    f3.classList.remove('o');
    f3.classList.add('none');
    f4.classList.remove('x');
    f4.classList.remove('o');
    f4.classList.add('none');
    f5.classList.remove('x');
    f5.classList.remove('o');
    f5.classList.add('none');
    f6.classList.remove('x');
    f6.classList.remove('o');
    f6.classList.add('none');
    f7.classList.remove('x');
    f7.classList.remove('o');
    f7.classList.add('none');
    f8.classList.remove('x');
    f8.classList.remove('o');
    f8.classList.add('none');
    f9.classList.remove('x');
    f9.classList.remove('o');
    f9.classList.add('none');
}
function newTurn(elem) {
    if(playerTurn == 1 && elem.innerHTML.length == 0){
        oTurn();
        playerTurn = 2;
    } else if(playerTurn == 2 && elem.innerHTML.length == 0){
        xTurn();
        playerTurn = 1;
    }
}
let p1Arr = [];
let p2Arr = [];
function displayXorO(elem) {
    if(playerTurn == 1){
        newTurn(elem);
        if(elem.innerHTML.length == 0 && p1Winner == false && p2Winner == false){
            elem.classList.remove('o');
            elem.classList.remove('x');
            elem.classList.add('none');
            return elem.innerHTML = 'X';
        }
    } else if(playerTurn == 2 && p1Winner == false && p2Winner == false){
        newTurn(elem);
        if(elem.innerHTML.length == 0){
            elem.classList.remove('o');
            elem.classList.remove('x');
            elem.classList.add('none');
            return elem.innerHTML = 'O';
        }
    }
}
function clearBoard() {
    f1.innerHTML = '';
    f2.innerHTML = '';
    f3.innerHTML = '';
    f4.innerHTML = '';
    f5.innerHTML = '';
    f6.innerHTML = '';
    f7.innerHTML = '';
    f8.innerHTML = '';
    f9.innerHTML = ''; 
    p1Winner = false;
    p2Winner = false;
    noneTurn();
    p1Arr = [];
    p2Arr = [];
    winnerName.innerHTML = '';
}
let p1Winner = false;
let p2Winner = false;
function checkWinner() {
    if(p1Arr.includes(1) && p1Arr.includes(2) && p1Arr.includes(3)){
        p1Winner = true;
    }  else if (p1Arr.includes(4) && p1Arr.includes(5) && p1Arr.includes(6)){
        p1Winner = true;
    } else if (p1Arr.includes(7) && p1Arr.includes(8) && p1Arr.includes(9)){
        p1Winner = true;
    } else if(p1Arr.includes(1) && p1Arr.includes(4) && p1Arr.includes(7)){
        p1Winner = true;
    } else if(p1Arr.includes(2) && p1Arr.includes(5) && p1Arr.includes(8)){
        p1Winner = true;
    } else if(p1Arr.includes(3) && p1Arr.includes(6) && p1Arr.includes(9)){
        p1Winner = true;
    } else if(p1Arr.includes(1) && p1Arr.includes(5) && p1Arr.includes(9)){
        p1Winner = true;
    } else if(p1Arr.includes(3) && p1Arr.includes(5) && p1Arr.includes(7)){
        p1Winner = true;
    } else {
        p1Winner = false;
    }
    if(p2Arr.includes(1) && p2Arr.includes(2) && p2Arr.includes(3)){
        p2Winner = true;
    }  else if (p2Arr.includes(4) && p2Arr.includes(5) && p2Arr.includes(6)){
        p2Winner = true;
    } else if (p2Arr.includes(7) && p2Arr.includes(8) && p2Arr.includes(9)){
        p2Winner = true;
    } else if(p2Arr.includes(1) && p2Arr.includes(4) && p2Arr.includes(7)){
        p2Winner = true;
    } else if(p2Arr.includes(2) && p2Arr.includes(5) && p2Arr.includes(8)){
        p2Winner = true;
    } else if(p2Arr.includes(3) && p2Arr.includes(6) && p2Arr.includes(9)){
        p2Winner = true;
    } else if(p2Arr.includes(1) && p2Arr.includes(5) && p2Arr.includes(9)){
        p2Winner = true;
    } else if(p2Arr.includes(3) && p2Arr.includes(5) && p2Arr.includes(7)){
        p2Winner = true;
    } else {
        p2Winner = false;
    }
}
function winnerFunc() {
    if(p1Winner == true){
        noneTurn();
        winPage.style.display = 'flex';
        if(player1.value.length > 0){
        winnerName.innerHTML = player1.value;
        } else {
            winnerName.innerHTML = 'X';
        }
    } else if(p2Winner == true){
        noneTurn();
        winPage.style.display = 'flex';
        if(player2.value.length > 0){
        winnerName.innerHTML = player2.value;
        } else {
            winnerName.innerHTML = 'O';
        }
    }
}

function draw() {
    if(f1.innerHTML.length > 0 && f2.innerHTML.length > 0 && f3.innerHTML.length > 0 
        && f4.innerHTML.length > 0 && f5.innerHTML.length > 0 && f6.innerHTML.length > 0 
        && f7.innerHTML.length > 0 && f8.innerHTML.length > 0 && f9.innerHTML.length > 0
        && p1Winner == false && p2Winner == false){
            noneTurn();
            winPage.style.display = 'flex';
            youwon.innerHTML = 'Draw!';
        }
}
function arrPush(num) {
    if(playerTurn == 2){
        if(p1Arr.includes(num) == false && p2Arr.includes(num) == false){
            p1Arr.push(num);
        }
    } else if(playerTurn == 1){
        if(p1Arr.includes(num) == false && p2Arr.includes(num) == false){
            p2Arr.push(num);
        }
    }
}
f1.addEventListener('click', function(){
    displayXorO(f1);
    arrPush(1);
    checkWinner();
    winnerFunc();
    draw();
});
f2.addEventListener('click', function(){
    displayXorO(f2);
    arrPush(2);
    checkWinner();
    winnerFunc();
    draw();
});
f3.addEventListener('click', function(){
    displayXorO(f3);
    arrPush(3);
    checkWinner();
    winnerFunc();
    draw();
});
f4.addEventListener('click', function(){
    displayXorO(f4);
    arrPush(4);
    checkWinner();
    winnerFunc();
    draw();
});
f5.addEventListener('click', function(){
    displayXorO(f5);
    arrPush(5);
    checkWinner();
    winnerFunc();
    draw();
});
f6.addEventListener('click', function(){
    displayXorO(f6);
    arrPush(6);
    checkWinner();
    winnerFunc();
    draw();
});
f7.addEventListener('click', function(){
    displayXorO(f7);
    arrPush(7);
    checkWinner(); 
    winnerFunc();
    draw();
});
f8.addEventListener('click', function(){
    displayXorO(f8);
    arrPush(8);
    checkWinner();
    winnerFunc();
    draw();
});
f9.addEventListener('click', function(){
    displayXorO(f9);
    arrPush(9);
    checkWinner();
    winnerFunc();
    draw();
});
newround.addEventListener('click', function(){
    winPage.style.display = 'none';
    if(p1Winner == true){
        score1value += 1;
    } else if(p2Winner == true){
        score2value += 1;
    }
    changeScore();
    newGame();
    clearBoard();
    clearTurn(f1);
    clearTurn(f2);
    clearTurn(f3);
    clearTurn(f4);
    clearTurn(f5);
    clearTurn(f6);
    clearTurn(f7);
    clearTurn(f8);
    clearTurn(f9);
    xTurn();
});
restart.addEventListener('click', function(){
    winPage.style.display = 'none';
    newGame();
    clearBoard();
    clearTurn(f1);
    clearTurn(f2);
    clearTurn(f3);
    clearTurn(f4);
    clearTurn(f5);
    clearTurn(f6);
    clearTurn(f7);
    clearTurn(f8);
    clearTurn(f9);
    xTurn();
    score1value = 0;
    score2value = 0;
    changeScore();
});
