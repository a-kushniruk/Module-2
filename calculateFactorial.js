function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Обчислюємо факторіал числа 11
const number = 11;
const result = factorial(number);

console.log(`Факторіал числа ${number} дорівнює ${result}`);