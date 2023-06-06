function processNumbers() {
    const numbers = [1,33,21,8,4,12]
    const max = Math.max(...numbers)
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return {
        maximo: max,
        suma: sum
    };
  }
  module.exports = processNumbers;