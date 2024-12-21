//*********** */    filterEvenNumbers  ********************//

const isEven = function (number) {
  return (number & 1) === 0;
};

// even numbers [1, 2, 3, 4, 5] => [2, 4]
const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};
console.log(filterEvenNumbers([1, 2, 3, 4, 5]));

//*********** */     filterLongWords    ********************//

const isWordMoreThan5Letters = function (word) {
  return word.length > 5;
};
// words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"]

const filterLongWords = function (words) {
  return words.filter(isWordMoreThan5Letters);
};

console.log(filterLongWords(["apple", "banana", "kiwi", "grape"]));