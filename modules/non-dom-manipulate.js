export const allowedChar = (input) => {
    const regex = /\d+/g;

    return regex.test(input);
}

export const isPrimeCheck = (n) => {
    if (n <= 1) return false; // negatives
    if (n % 2 == 0 && n > 2) return false; // even numbers
    const s = Math.sqrt(n); // store the square to loop faster
    for (let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
        if (n % i === 0) return false; // modulo shows a divisor was found
    }
    return true;

}

export const isSumTen = (n) => {
    let sum = 0;
    while (n > 0) {
        const r = n % 10;
        n = (n - r) / 10;
        sum += r;
    }

    return !(sum % 10);
}

export const isEndInOneOrFive = (n) => {
    if (n % 10 === 1 || n % 10 === 5) {
        return true;
    }
    return false;
}

export const isMultiplesFiveOrThree = (n) => {
    let stringified = n.toString();

    let multiplesFiveOrThree = stringified.split('').every(char => +char % 3 === 0 || +char % 5 === 0);

    return multiplesFiveOrThree;
}