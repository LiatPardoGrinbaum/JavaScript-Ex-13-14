//1
/* Write a function called extractOnlyValue which accepts an array of
objects and a key and returns a new array with the value of each object at
the key */

arr = [{ name: "Marshal" }, { name: "Sky" }, { name: "Chase" }];

const extractOnlyValue = (arrObj, key) => {
  const newArr = arrObj.reduce((accArr, current) => {
    accArr.push(current[key]);
    return accArr;
  }, []);
  return newArr;
};

console.log(extractOnlyValue(arr, "name"));

//2
/* Write a function called countOnlyVowels which accepts a string and
returns an object with the keys as the vowel and the values as the number
of times the vowel appears in the string. This function should be case
insensitive so a lowercase letter and uppercase letter should count */

const countOnlyVowels = (str) => {
  let vowels = "aeoui";
  return (obj = str
    .toLowerCase()
    .split("")
    .reduce((acc, curr) => {
      if (vowels.includes(curr)) {
        acc[curr] ? acc[curr]++ : (acc[curr] = 1);
      }
      return acc;
    }, {}));
};

console.log(countOnlyVowels("I have no idea what to write here"));

//3
/* Write a function called addKeyAndValue which accepts 3 parameters an
array of objects, key and value and returns the array of objects passed to it
.with each object now including the key and value passed to the function */

arr = [{ name: "Marshal" }, { name: "Sky" }, { name: "Chase" }];

const addKeyAndValue = (arrObj, key, value) => {
  const newArr = arrObj.reduce((acc, curr) => {
    curr[key] = value;
    acc.push(curr);
    return acc;
  }, []);
  return newArr;
};

console.log(addKeyAndValue(arr, "species", "dog"));

//another solution:
const addKeyAndValue2 = (arrObj, key, value) => {
  return arrObj.reduce((acc, cur, index) => {
    acc.push(cur);
    acc[index][key] = value;
    return acc;
  }, []);
};
console.log(addKeyAndValue2(arr, "species", "dog"));

// other solution- the initial array is the array itelf, not an empy one.
const addKeyAndValue3 = (arrObj, key, value) => {
  return arrObj.reduce((acc, cur, index) => {
    acc[index][key] = value;
    return arrObj;
  }, arrObj);
};

console.log(addKeyAndValue3(arr, "species", "dog"));
