// 1- max

const max = (arr) => {
  const max = arr.reduce((maxVal, currentVal) => {
    if (currentVal > maxVal) {
      return currentVal;
    } else {
      return maxVal;
    }
  });
  return max;
};

console.log(max([1, 34, 2, 8, 64, 120, 3]));

//2- sum of even numbers
const sumEven = (arr) => {
  const sumEven = arr.filter((e) => e % 2 === 0).reduce((sumEvenVal, currentVal) => sumEvenVal + currentVal);
  return sumEven;
};

console.log(sumEven([1, 33, 2, 1, 6, 12, 3]));

//3 - average
const average = (arr) => {
  const avg = arr.reduce((sumVal, currentVal) => sumVal + currentVal) / arr.length;
  return avg;
};

console.log(average([1, 33, 2, 1, 6, 12, 3]));
