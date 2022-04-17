const numbers = [1, -5, 666, 2, 400, 11];

//1
const sortAsc = numbers.slice().sort((a, b) => a - b); // from smaller to bigger number
console.log(sortAsc);

//2
const sortDes = numbers.slice().sort((a, b) => b - a); // from bigger to smaller number
console.log(sortDes);
