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

//*********** */     filterAdults  ********************//

// people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]

const isPersonOlderThan30 = function (data) {
  return data.age > 30;
};

const filterAdults = function (people) {
  return people.filter(isPersonOlderThan30);
};

console.log(filterAdults([{ name: "Alice", age: 25 }, { name: "Bob", age: 35 }]));

//*********** */     filterActiveUsers  ********************//

// active users [{username: "alice", active: true}, {username: "bob", active: false}] => [{username: "alice", active: true}]
const isUserActive = function (uderDetails) {
  return uderDetails.active;
};

const filterActiveUsers = function (users) {
  return users.filter(isUserActive);
};

console.log(filterActiveUsers([{ username: "alice", active: true }, { username: "bob", active: false }]));

//*********** */   filterNumbersGreaterThanTen  ********************//

// numbers greater than 10 [5, 12, 7, 18, 3] => [12, 18]

const filterNumbersGreaterThanTen = function (numbers) {
  return numbers.filter(function (number) { return number > 10; });
};

console.log(filterNumbersGreaterThanTen([5, 12, 7, 18, 3]));
