let count = JSON.parse(localStorage.getItem('count'));


function add() {
    count++;
    document.getElementById('number').innerHTML = "number is " + count;
    localStorage.setItem('count', JSON.stringify(count))
}

function subtract() {
    count--;
    document.getElementById('number').innerHTML = "number is " + count;
    localStorage.setItem('count', JSON.stringify(count))
}

function resetScore() {
    count = 0;
    document.getElementById('number').innerHTML = "number is " + count;

    localStorage.removeItem('count');

}

// if (count = 0); {
//     document.getElementById('number').innerHTML = "number is " + count;
// }

document.getElementById('number').innerHTML = "number is " + count;