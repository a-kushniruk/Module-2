const factorial = require('/Study/calculateFactorial'); 

describe('Функція factorial', () => {
  
  it('повинна повертати 1 для 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('повинна повертати 1 для 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('повинна правильно обчислювати факторіал числа', () => {
    expect(factorial(5)).toBe(120); // 5! = 120
    expect(factorial(6)).toBe(720); // 6! = 720
    expect(factorial(10)).toBe(3628800); // 10! = 3,628,800
    expect(factorial(11)).toBe(39916800); // 11! = 39,916,800
  });

  it('повинна викидати помилку для відємного числа', () => {
    expect(() => {
      factorial(-1);
    }).toThrow();
  });
});
