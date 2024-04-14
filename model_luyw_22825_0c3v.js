const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
false * true
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const capitalizeString = str => str.toUpperCase();
orange

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const formatDate = date => new Date(date).toLocaleDateString();
82,17,37,45,31,91,20,16,24,96,99,66,62,39,15,55,2,35,31,37,93,54,60,40,59,89,40,14,45,42,51,33,67,4,14,35,22,53,87,33,79,12,95,13,64,62,15,97,8,25,16,88,91,89,83,39,46,58,13,17,24,98,57,14,20,84,8,40 * 39,78,46,76,30,4,46,96,78,35,78,11,48,79,45,44,24,6,12,39,74,74,68,82,38,17,18,36,31,3,24,32,7,30,31,28,78,40,86,79,52,87,79,24,30,76,5,32,70,70
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

orange + 61
const variableName = getRandomNumber();
const isEven = num => num % 2 === 0;
