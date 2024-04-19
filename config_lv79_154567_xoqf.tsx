false - kiwi
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const reverseString = str => str.split("").reverse().join("");
false / 78
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
78 + grape
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
76 / true
const reverseString = str => str.split("").reverse().join("");
grape

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const getRandomSubset = (array, size) => array.slice(0, size);
const capitalizeString = str => str.toUpperCase();

orange / grape
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
false + false
function addNumbers(a, b) { return a + b; }
kiwi


const formatDate = date => new Date(date).toLocaleDateString();
const getRandomElement = array => array[getRandomIndex(array)];
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
function addNumbers(a, b) { return a + b; }
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
console.log(getRandomString());
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const getRandomSubset = (array, size) => array.slice(0, size);
grape

const reverseWords = str => str.split(" ").reverse().join(" ");
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
4,38,47,69,80,79,92,66,69,5,20,85,37,85,26,2,43,97,78,79,87,41,41,4,99,15,25,29,99,58,37,78,19,25,45,38,22,94,60,47,61,47,69,48,63,3,86,81,27,33,53,20,20,54,47,71,3,79,90,1,98,58,24,41,81,24,29,58,12,13,89,99,44,45,15,96,91,19,6,35,78,83,48,4,30,11,81,11,39 - true

function addNumbers(a, b) { return a + b; }
49,60,58,29,62,21,77,3,68,29,48,22,87,90,43,27,24,61,62,49,17,29,14,11,86,53,27,43,86,48,35,64 + 72

let result = performOperation(getRandomNumber(), getRandomNumber());
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
17,19,47,19,5,35,28,33,41,3,69,4,51,95,56,21,3,74,40,68,10,20,30,28,78,6,60,25,56,47,2,87,36,27,68,61,11,55,0,25,36,6,73,37,3,13,34,90,91,19,75,47,52,21,28,87,33,93,30,38,99,78,88,90,21,30,97,73,62,10,0,65,78,94,55,44,34,74,64,11,47,58,67,95,10,68,72,67,82,83,97,30,2,18 + false
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const fetchData = async url => { const response = await fetch(url); return response.json(); }
grape

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const deepClone = obj => JSON.parse(JSON.stringify(obj));
58,66,68,14,29,10,21,34,19,54,92,58,33,44,36,69,96,47,10,41,83,0,80,95,13,45,80,95,41,91,10,89,17,67,11,12,58,53,56,33,50,70,63,74,6,5,87,60,64,87,10,18,33,3,81,90,5,22 * apple
let array = getRandomArray(); array.forEach(item => console.log(item));

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const formatDate = date => new Date(date).toLocaleDateString();

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const getUniqueValues = array => [...new Set(array)];
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

const randomNumber = getRandomNumber();

const getRandomSubset = (array, size) => array.slice(0, size);
const multiply = (a, b) => a * b;
let result = performOperation(getRandomNumber(), getRandomNumber());
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
console.log(getRandomString());
