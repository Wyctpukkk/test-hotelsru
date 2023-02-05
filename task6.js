// Время решения задачи 16 часов

const multiplication = (number) => {
  let table = '';
  const numberCharsCount = String(number).length;
  for (let i = 0; i <= number; i++) {
    const rowNumber = Math.max(i, 1);
    let row = `${i || ' '}`.padStart(numberCharsCount);

    for (let j = 1; j <= number; j++) {
      const maxCharsCount = String(j * number).length;
      row += `${rowNumber * j}`.padStart(maxCharsCount + 1);
    }
    table += `${row}${i === number ? '' : '\n'}`;
  }
  return table;
};

console.log(multiplication(50));
