// Время решения задачи 27мин

const double = (arr) => {
  arr.sort();
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] && arr[i] !== arr[i + 2]) {
      result.push(arr[i]);
    }
  }

  return result;
};

const includes = (arr1, arr2) => {
  const arr1doubled = double(arr1);
  const arr2doubled = double(arr2);
  const result = arr1doubled.concat(arr2doubled);

  return double(result);
};

console.log(
  includes(
    [7, 17, 1, 9, 1, 17, 56, 56, 23],
    [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
  )
);
