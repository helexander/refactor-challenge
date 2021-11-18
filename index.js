// A number is interesting if it is has atleast 2 of the following:
// prime,
// ends in 1 or 5,
// sum of digits is a multiple of 10,
// all digits are multiples of 3 or 5


// Refactors made: 3

// let button = document.querySelector("#submitButton");

const isPrimeCheck = (n) => {
    const MAX = Math.sqrt(n);

    for (let i = 2; i < MAX; ++i) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;

    // let isPrime = true;

    // for (let i = n - 1; i > 1; --i) {
    //     if (n % i === 0) {
    //         isPrime = false;
    //         break
    //     }
    // }

    // return isPrime;
}

function sumTen(n) {
    // const stringified = n.toString();

    // const sum = stringified.split('').reduce((a, b) => a + parseInt(b), 0);

    // if (sum % 10 === 0) return true; 

    // return false;

    let sum = 0;
    while (n > 0) {
        const r = n % 10;
        n = (n - r) / 10;
        sum += r;
    }

    return !(sum % 10);
}

function isInteresting(n) {

    let sumTen = false;
    let endsInOneOrFive = false;
    let multiplesFiveOrThree = true;
    let isPrime = isPrimeCheck(n);
    // for (let i = n - 1; i > 1; --i) {
    //     if (n % i === 0) {
    //         isPrime = false;
    //         break
    //     }
    // }

    let sum = 0;


    if (n % 10 === 1 || n % 10 === 5) {
        endsInOneOrFive = true;
    }

    for (let i = 0; i < stringified.length; ++i) {
        if (+stringified[i] % 3 !== 0 && +stringified[i] % 5 !== 0) {
            return true;
        }
    }

    multiplesFiveOrThree = stringified.split('').every(char => +char % 3 === 0 || +char % 5 === 0);

    let count = isPrime + sumTen + endsInOneOrFive + multiplesFiveOrThree;

    // if (isPrime) count += 1;
    // if (sumTen) count += 1;
    // if (endsInOneOrFive) count += 1;
    // if (multiplesFiveOrThree) count += 1;

    console.log(isPrime, sumTen, endsInOneOrFive, multiplesFiveOrThree);
    console.log("COUNT: ", count);

    if (count > 1) {
        return n + " is interesting";
    } else if (count > 0) {
        return n + " is okay";
    } else {
        return n + " is booooooring";
    }
}

// document.addEventListener("click", () => {
document.querySelector("#submitButton").addEventListener("click", () => {
    let input = document.querySelector("#numberInput");
    let value = parseInt(input.value);

    let interesting = isInteresting(value);

    let output = document.querySelector("#output");
    output.innerText = interesting;
});

document.querySelector("#primeButton").addEventListener("click", () => {
    let input = document.querySelector("#primeInput");
    let n = parseInt(input.value);

    let isPrime = isPrimeCheck(n);
    // for (let i = n - 1; i > 1; --i) {
    //     if (n % i === 0) {
    //         isPrime = false;
    //         break
    //     }
    // }

    const output = document.querySelector("#primeOutput");
    if (isPrime) {
        output.innerHTML = n + " is prime!";
    } else {
        output.innerHTML = n + " is not prime!";
    }
});
