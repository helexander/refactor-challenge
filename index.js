import { allowedChar, isPrimeCheck } from "./modules/non-dom-manipulate.js";
import { isInteresting } from "./modules/dom-manipulate.js";

document.querySelector("#submitButton").addEventListener("click", () => {
    let inputVal = document.querySelector("#numberInput").value;
    let n = parseInt(inputVal);

    const validCheck = allowedChar(n);

    if (!validCheck || inputVal === "") {
        alert("This is not a valid input");
    } else {
        let output = document.querySelector("#output");
        output.innerText = isInteresting(n);
    }
});

document.querySelector("#primeButton").addEventListener("click", () => {
    let inputVal = document.querySelector("#primeInput").value;
    let n = parseInt(inputVal);

    const validCheck = allowedChar(n);

    if (!validCheck || inputVal === "") {
        alert("This is not a valid input");
    } else {
        const output = document.querySelector("#primeOutput");
        isPrimeCheck(n) ? output.innerHTML = n + " is prime!" : output.innerHTML = n + " is not prime!";
    }
});


