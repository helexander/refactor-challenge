import { isPrimeCheck } from "./modules/non-dom-manipulate";

describe("Checking for prime numbers", () => {
    it("Checks value on whether it is prime or not", () => {
        expect(isPrimeCheck(3)).toBe(true);
        expect(isPrimeCheck(2)).toBe(true);
        expect(isPrimeCheck(4)).toBe(false);
        expect(isPrimeCheck(32)).toBe(false);
    })
})
