//***a***
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

//a.1
const sortToAsc = foods.slice().sort();
console.log(sortToAsc);

//a.2
const sortToDes = foods.slice().sort().reverse();
console.log(sortToDes);

//***b***
const foodsWithUpperCase = ["falafel", "Sabich", "hummus", "pizza with extra pineapple"];

//b.1
const sortToAsc2 = foodsWithUpperCase.slice().sort();
console.log(sortToAsc2);

//b.2
const sortToDes2 = foodsWithUpperCase.slice().sort((a, b) => (a > b ? -1 : 1)); ///can be done with .reverse() too
console.log("hii");
console.log(sortToDes2);

//***c***
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

//c.1
const sortToshortest = words.slice().sort((x, y) => y.length - x.length);
console.log(sortToshortest);

//c.2
const sortToLongest = words.slice().sort((x, y) => x.length - y.length);
console.log(sortToLongest);
