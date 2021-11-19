import { isPrimeCheck, isSumTen, isEndInOneOrFive, isMultiplesFiveOrThree } from "./non-dom-manipulate.js";

export const displayResult = (count, n) => {
    // A number is interesting if it is has atleast 2 of the following:
    // prime,
    // ends in 1 or 5,
    // sum of digits is a multiple of 10,
    // all digits are multiples of 3 or 5

    if (count > 1) {
        return n + " is interesting";
    } else if (count > 0) {
        return n + " is okay";
    } else {
        return n + " is booooooring";
    }
}

export const isInteresting = (n) => {

    let sumTen = isSumTen(n);
    let endsInOneOrFive = isEndInOneOrFive(n);
    let multiplesFiveOrThree = isMultiplesFiveOrThree(n);
    let isPrime = isPrimeCheck(n);

    let count = isPrime + sumTen + endsInOneOrFive + multiplesFiveOrThree;

    console.log(isPrime, sumTen, endsInOneOrFive, multiplesFiveOrThree);
    console.log("COUNT: ", count);

    return displayResult(count, n);
}

