"use strict";

let output = 0;
let roundTo = 0;
let firstNumber = 0;
let operatorValue = "+";
let secondNumber = 0;

document.addEventListener("DOMContentloaded", start());

function start() {
    console.log('start');
    // started with trying to put an eventlistener on every field for LIVE updating, wasn't working, will try
    //calculate having the only eventlistener
    // let firstField = document.getElementById("firstnumber");
    // firstField.addEventListener("keyup", collectFirst());

    // let operate = document.getElementById("operator");
    // operate.addEventListener("onchange", collectOperator());

    // let secondField = document.getElementById("secondnumber");
    // secondField.addEventListener("keyup", collectSecond());
    document.querySelector("#calculate").addEventListener("click", calculate);
    document.querySelector("#clear").addEventListener("click", clearAll);
}

function calculate() {
    console.log("calculating!");
    //collect data from each field
    //convert strings entered to 
    firstNumber = Number(document.querySelector("#firstnumber").value);
    console.log("firstnumber:", firstNumber);

    operatorValue = document.querySelector("#operator").value;
    console.log("operator:", operatorValue);

    secondNumber = Number(document.querySelector("#secondnumber").value);
    console.log("secondnumber:", secondNumber);

    doMath();
}

//I know there's a way to do this tighter with literals..
function doMath() {
    if (operatorValue === 'add') {
        output = firstNumber + secondNumber;
    } else if (operatorValue === 'sub') {
        output = firstNumber - secondNumber;
    } else if (operatorValue === 'mul') {
        output = firstNumber * secondNumber;
    } else if (operatorValue === 'div') {
        output = firstNumber / secondNumber;
    }
    console.log("output:", output);
    boxChecker()
}

function boxChecker() {
    const tickBox = document.querySelector("#doround").checked;
    if (tickBox === true) {
        roundMe();
        displayOutput();
    } else
        displayOutput();
}

// //if result should be rounded, round number to #decimals 
function roundMe() {
    const roundUpTo = document.querySelector("#decimals").value;
    // output = Math.floor(output) * roundUpTo;
    output = output.toFixed(roundUpTo);
}

// BELOW append output to ul #results and position at bottom, 
function displayOutput() {
    document.querySelector("#results").scrollTo(0, 99999);
    let display = document.createElement("li");
    display.textContent = output;
    document.querySelector("#results").appendChild(display);

    // Trying to get the scroll to work;
    // document.querySelector("#results")
    // ("#results > li:last-child");
}
//ABOVE needs fixing as will replace the answer with every calculate().


//clear results 
function clearAll() {
    console.log("cleared")
    output = 0;
    roundTo = 0;
    firstNumber = 0;
    document.querySelector("#firstnumber").value = "";
    operatorValue = "+";
    document.querySelector("#operator").value = "add";
    secondNumber = 0;
    document.querySelector("#secondnumber").value = "";

    // clearing asnwer list with forEach
    let answerList = document.querySelectorAll("li");
    answerList.forEach(() => {
        answerList.textcontent = "";
    })

}


// }