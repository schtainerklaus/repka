grape - grape
const formatDate = date => new Date(date).toLocaleDateString();
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
17 - 71,79,63,23,77,63,47,71,92,13,82,73,25,87,8,97,15,50,25,46,6,41,96,5,68,55,2,39,11,37,4,79,31,24,31,41,21,39,16,58,86,28,20,65,99,45,12
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

kiwi

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

57 + true
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
apple - banana

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

const formatDate = date => new Date(date).toLocaleDateString();
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
kiwi + 45,96,76,10,71,72,84,15,80,78,59,19,86,76,26,15,14,53

const findSmallestNumber = numbers => Math.min(...numbers);

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
kiwi

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

70 / 17
const filterEvenNumbers = numbers => numbers.filter(isEven);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
