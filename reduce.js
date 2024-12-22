//@@@@@@@@@@@@@@   #########   1 sumOfElements   ######### @@@@@@@@@@@@@@\\

// sumOf([1, 2, 3, 4]) => 10
const sumInputs = [1, 2, 3, 4];

const getSumOfElement = function (sum, element) {
  const sumOfElements = sum;
  return sumOfElements + element;
};

const sumOf = function (numbers) {
  return numbers.reduce(getSumOfElement, 0);
};

console.log(sumOf(sumInputs));

//@@@@@@@@@@@@@@   #########  2 productOfElements   ######### @@@@@@@@@@@@@@\\

// productOf([1, 2, 3, 4]) => 24
const valuesToMultiply = [1, 2, 3, 4];

const getProduct = function (product, element) {
  const currentProduct = product;
  return currentProduct * element;
};

const productOf = function (numbers) {
  return numbers.reduce(getProduct, 1);
};

console.log(productOf(valuesToMultiply));

//@@@@@@@@@@@@@@   ######### 3 averageOf  ######### @@@@@@@@@@@@@@\\

// averageOf([1, 2, 3, 4, 5]) => 3
const elementsForAverage = [1, 2, 3, 4, 5];

const averageOf = function (numbers) {
  const avgOfElements = sumOf(numbers) / numbers.length;
  return avgOfElements;
};

console.log(averageOf(elementsForAverage));

//@@@@@@@@@@@@@@  4 #########  minOfElements   ######### @@@@@@@@@@@@@@\\


// minOf([3, 1, 4, 1, 5,0, 9, 2]) => 0
const valuesForMin = [3, 1, 4, 0, 5, 9, 5];

const getMinElement = function (minValue, element) {
  const currentMinValue = minValue;
  return currentMinValue < element ? currentMinValue : element;
};

const minOf = function (numbers) {
  return numbers.reduce(getMinElement, Infinity);
};

console.log(minOf(valuesForMin));

//@@@@@@@@@@@@@@ 5  #########  maxOfElements   ######### @@@@@@@@@@@@@@\\


// maxOf([3, 1, 4, 1, 5, 9, 2,10]) => 10
const valuesForMax = [3, 1, 4, 10, 5, 9, 5];

const getMaxElement = function (maxValue, element) {
  const currentMaxValue = maxValue;
  return currentMaxValue > element ? currentMaxValue : element;
};

const maxOf = function (numbers) {
  return numbers.reduce(getMaxElement, -Infinity);
};

console.log(maxOf(valuesForMax));

//@@@@@@@@@@@@@@ 6  #########  sumPositiveNumbers   ######### @@@@@@@@@@@@@@\\

// sumPositiveNumbers([1, -2, 3, -4,4]) => 8

const listOfIntegers = [1, -2, 3, -4, 0, 4, -2];

const isPositive = function (element) {
  return element > -1;
};

const sumPositiveNumbers = function (numbers) {
  return sumOf(numbers.filter(isPositive));
};

console.log(sumPositiveNumbers(listOfIntegers));

//@@@@@@@@@@@@@@  7 #########  sumOfSquares  ######### @@@@@@@@@@@@@@\\


// sumOfSquares([1, 2, 3, 4]) => 30
const listOfElements = [1, 2, 3, 4];

const getSquare = function (element) {
  return Math.pow(element, 2);
};

const sumOfSquares = function (numbers) {
  const listOfSqureOfElement = numbers.map(getSquare);

  return sumOf(listOfSqureOfElement);
};

console.log(sumOfSquares(listOfElements));


//@@@@@@@@@@@@@@  8 #########  sumOfOddNumbers   ######### @@@@@@@@@@@@@@\\

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const elementsForSumOfOdd = [1, 2, 3, 4, 5, 7];

const isOdd = function (element) {
  return (element & 1) === 1;
};

const sumOfOddNumbers = function (numbers) {
  return sumOf(numbers.filter(isOdd));
};

console.log(sumOfOddNumbers(elementsForSumOfOdd));

//@@@@@@@@@@@@@@ 9  #########  countNegativeNumbers  ######### @@@@@@@@@@@@@@\\

// countNegativeNumbers([1, -2, 3, -4]) => 2

const elementsForCountNegativeNumber = [1, -2, 3, -4, -5, -10];

const countNegativeNumber = function (count, element) {
  let negativeCount = count;

  return !isPositive(element) ? negativeCount + 1 : negativeCount;
};

const countNegativeNumbers = function (numbers) {
  return numbers.reduce(countNegativeNumber, 0);
};

console.log(countNegativeNumbers(elementsForCountNegativeNumber));

//@@@@@@@@@@@@@@  10 #########  findSumOfEvenSquares   ######### @@@@@@@@@@@@@@\\


// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const elementsForSumOfEvenSquares = [1, 2, 3, 4];

const isEven = function (element) {
  return (element & 1) === 0;
};

const findSumOfEvenSquares = function (numbers) {
  const listOfEvenNumbers = numbers.filter(isEven);
  return sumOfSquares(listOfEvenNumbers);
};

console.log(findSumOfEvenSquares(elementsForSumOfEvenSquares));

//@@@@@@@@@@@@@@   ######### 11 concatenateWords  ######### @@@@@@@@@@@@@@\\

// concatenateWords(["hello", "world"]) => "helloworld"

const wordSet = ["hello", "world"];

const joinedWords = function (combinedWords, word) {
  const mergedWords = combinedWords;
  return mergedWords + word;
};

const concatenateWords = function (words) {
  return words.reduce(joinedWords, "");
  //return words.join("");
};

console.log(concatenateWords(wordSet));

//@@@@@@@@@@@@@@   ######### 12 longestWord   ######### @@@@@@@@@@@@@@\\

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const wordsArrayForMaxWord = ["apple", "banana", "cherry", "kiwi"];

const getLongestWord = function (largestWord, word) {
  const maxLengthWord = largestWord;
  return word.length > maxLengthWord.length ? word : maxLengthWord;
};

const longestWord = function (words) {
  return words.reduce(getLongestWord, "");
};

console.log(longestWord(wordsArrayForMaxWord));

//@@@@@@@@@@@@@@   ######### 13 shortestWord  ######### @@@@@@@@@@@@@@\\


// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) { };

//@@@@@@@@@@@@@@   ######### 14 productOfElements   ######### @@@@@@@@@@@@@@\\


// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) { };

//@@@@@@@@@@@@@@   ######### 15 productOfElements   ######### @@@@@@@@@@@@@@\\


// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) { };

//@@@@@@@@@@@@@@   ######### 16 productOfElements   ######### @@@@@@@@@@@@@@\\


// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) { };

//@@@@@@@@@@@@@@   ######### 17 productOfElements   ######### @@@@@@@@@@@@@@\\


// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) { };

//@@@@@@@@@@@@@@   ######### 18 productOfElements   ######### @@@@@@@@@@@@@@\\


// countVowelsInWords(["hello", "world"]) => "eoo"
const countVowelsInWords = function (words) { };

//@@@@@@@@@@@@@@   #########  productOfElements   ######### @@@@@@@@@@@@@@\\


// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = function (words) { };

//@@@@@@@@@@@@@@   #########  productOfElements   ######### @@@@@@@@@@@@@@\\


// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseString = function (words) { };

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) { };

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = function (arrays) { };

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) { };

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) { };

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const groupByLength = function (strings) { };

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = function (strings) { };

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) { };

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) { };

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) { };

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) { };

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) { };

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) { };

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) { };

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) { };

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) { };

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) { };

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) { };

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) { };

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) { };

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) { };

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) { };

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) { };

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) { };

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) { };

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) { };

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) { };

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) { };

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) { };

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) { };

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) { };

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) { };

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) { };

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) { };

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const groupByDate = function (records) { };

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) { };

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const sumByCategory = function (items) { };

//added new line 1
