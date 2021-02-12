const cell = document.getElementsByClassName('cell');
const round = document.getElementsByClassName('curPlyr');

let score = 1;
let player = "x";
const stat = {
    'x': 0,
    'o': 0,
}
const winIndex = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [4, 5, 6],
    [7, 8, 9]
];

round[0].innerText = score;

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false);
}

function cellClick() {

    let data = [];

    if (!this.innerHTML) {
        this.innerHTML = player;
    } else {
        alert("Ячейка занята");
        return;
    }

    for (let i in cell) {
        if (cell[i].innerHTML === player) {
            data.push(parseInt(cell[i].getAttribute('position')));
        }
    }

    if (checkWin(data)) {
        stat[player] += 1;
        restart("Выграл: " + player);
    } else {
        let draw = true;
        for (let i in cell) {
            if (cell[i].innerHTML === '') draw = false;
        }
        if (draw) {
            restart("Ничья");
        }
    }
    player = player == "x" ? "o" : "x";
}

function checkWin(data) {
    for (let i in winIndex) {
        let win = true;
        for (let j in winIndex[i]) {
            let id = winIndex[i][j];
            let ind = data.indexOf(id);

            if (ind === -1) {
                win = false
            }
        }

        if (win) return true;
    }
    return false;
}

function restart(text) {

    alert(text);
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
    }
    updateStat();

}

function updateStat() {
    ++score;
    document.getElementById('sX').innerHTML = stat.x;
    document.getElementById('sO').innerHTML = stat.o;
    round[0].innerText = score;
}   