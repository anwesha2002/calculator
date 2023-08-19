function clearscreen() {
    document.getElementById("result").value = "";
}

function clear(value) {
    var a = document.getElementById("result").value;
    a = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}