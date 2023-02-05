// Время решения задачи 21мин

const floor = (number) => {
  let arr1 = Math.round(number);
  arr1 = String(arr1).split('');
  let lastIndex = arr1.length - 1;
  let result;
  if (arr1[lastIndex] >= 0 && arr1[lastIndex] <= 2) {
    arr1[lastIndex] = '0';
    result = arr1.join('');
  } else if (arr1[lastIndex] >= 3 && arr1[lastIndex] <= 7) {
    arr1[lastIndex] = '5';
    result = arr1.join('');
  } else if (arr1[lastIndex] == 8) {
    result = Number(arr1.join('')) + 2;
  } else if (arr1[lastIndex] == 9) {
    result = Number(arr1.join('')) + 1;
  }
  return result;
};

console.log(floor(27));
console.log(floor(27.8));
console.log(floor(41.7));
