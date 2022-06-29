let pTagCurrent = document.getElementById('current_status');
let tryBtn = document.getElementById('btn');
let pTagHistory = document.getElementById('status_history');
let x;
let y;

tryBtn.addEventListener('mouseover',function1);

function function1() {
    x = 'Moused Over!';
    pTagCurrent.innerHTML = x;
    pTagHistory.innerHTML += `${x} <br>`;
}

tryBtn.addEventListener('click',function2);

function function2() {
    x = 'Clicked!'
    pTagCurrent.innerHTML = x;
    pTagHistory.innerHTML += `${x} <br>`;
}

tryBtn.addEventListener('mouseout',function3);

function function3() {
    x = 'Moused Out!';
    pTagCurrent.innerHTML = x;
    pTagHistory.innerHTML += `${x} <br>`;
}