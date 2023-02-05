// Время решения задачи 8мин

const isNumber = (num) => {
  for (let i = 2; i < num; i++) {
    return num % i === 0 ? 'Число не простое' : 'Число простое';
  }
};

console.log(isNumber(7));
console.log(isNumber(12));
