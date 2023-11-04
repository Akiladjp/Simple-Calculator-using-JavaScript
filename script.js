function fn0() {
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + "0";
}

function fn1() {
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + "1";
}

function fn2() {
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + "2";
}

function fn3() {
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + "3";
}

function fn4() {
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + "4";
}

function fn5() {
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + "5";
}

function fn6() {
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + "6";
}

function fn7() {
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + "7";
}

function fn8() {
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + "8";
}

function fn9() {
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + "9";
}

function clr() {
    let previous = document.getElementById("display").innerHTML;
    let eraPrv = previous.slice(0, -1);
    document.getElementById("display").innerHTML = eraPrv;
}

let op;
let firstSave

function add() {
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
    op = "add";
}

function sub() {
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
    op = "sub";
}

function mul() {
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
    op = "mul";
}

function dev() {
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
    op = "dev";
}

function eq() {
    let secSave = document.getElementById("display").innerHTML;

    if(op == "add") {
        let answer = parseInt(firstSave) + parseInt(secSave);
        document.getElementById("display").innerHTML = answer;
    }

    else if(op == "sub") {
        let answer = parseInt(firstSave) - parseInt(secSave);
        document.getElementById("display").innerHTML = answer;
    }

    else if(op == "mul") {
        let answer = parseInt(firstSave) * parseInt(secSave);
        document.getElementById("display").innerHTML = answer;
    }

    else if(op == "dev") {
        let answer = parseInt(firstSave) / parseInt(secSave);
        document.getElementById("display").innerHTML = answer;
    }

    else {
        document.getElementById("display").innerHTML = "invalid..!";
    }
}

function ac() {
    firstSave = 0;
    document.getElementById("display").innerHTML = "0";
}
