// Время решения задачи 6мин

const named = (num) => {
  let arr2 = String(num).split('');
  let lastIndex = arr2.length - 1;
  let result;
  if (+arr2[lastIndex] >= 5 || +arr2[lastIndex] == 0) {
    result = arr2.join('') + ' компьютеров';
  } else if (+arr2[lastIndex] > 1 && +arr2[lastIndex] < 5) {
    result = arr2.join('') + ' компьютера';
  } else if (+arr2[lastIndex] === 1) {
    result = arr2.join('') + ' компьютер';
  }
  return result;
};

console.log(named(2));
console.log(named(25));
console.log(named(41));
console.log(named(1048));
