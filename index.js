//check palindrome
function checkPalindrome(str) {
    const reverseStr = str.split('').reverse().join('');

    if (str === reverseStr) {
        return "it is a palindrome";
    }

    return "it is not a palindrome";

}

console.log(checkPalindrome('madam'));

//swap two variables without using a third variable 
let a = 10;
let b = 20;
console.log(`Before swapping: a = ${a} and b = ${b}`);

a = a + b; //30 addition of a and b
b = a - b; //0-20=10 that a value
a = a - b;//30-10=20 that b value

console.log(`After swapping: a = ${a} and b = ${b}`);

//another way to swap two variables
let x = 10;
let y = 20;
console.log(`Before swapping: x = ${x} and y = ${y}`);

[x, y] = [y, x];// destructuring assignment

console.log(`After swapping: x = ${x} and y = ${y}`);

//add two array and filter duplicate values
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

//adding two arrays
const arr3 = arr1.concat(arr2);

console.log("After adding two", arr3);

const filterDuplicate = arr3.filter((value, index) => {
    return arr3.indexOf(value) === index;
});

console.log("After filtering duplicate", filterDuplicate);

//another way to filter duplicate values
const arr4 = [...new Set([arr1, arr2].flat())];

console.log("After filtering duplicate", arr4);


//filter duplicate values from an string
const str = "hello world";

const filterDuplicateStr = str.split('').filter((value, index) => {
    return str.indexOf(value) === index;
});

console.log("After filtering duplicate", filterDuplicateStr.join(''));

//show the duplicate values from an array
const arr5 = [1, 2, 3, 4, 5, 3, 4, 6, 7];

const duplicateValues = arr5.filter((value, index) => {
    return arr5.indexOf(value) !== index;
});

console.log("Duplicate values", duplicateValues);

//show the duplicate values from an string
const str1 = "hello world";

const duplicateValuesStr = str1.split('').filter((value, index) => {
    return str1.indexOf(value) !== index;
});

console.log("Duplicate values", duplicateValuesStr.join(''));

//sort an array in ascending order
const arr6 = [5, 3, 8, 4, 2];
const sortArr = arr6.sort((a, b) => a - b);
console.log("After sorting in ascending order", sortArr);
//sort an array in descending order
const sortArrDesc = arr6.sort((a, b) => b - a);
console.log("After sorting in descending order", sortArrDesc);

//binary search algorithm
function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1; //last index of an array

    while (start <= end) { //if start is greater than end then value is not found
        let mid = Math.floor((start + end) / 2); //find the middle index of an array

        if (arr[mid] === value) {   //if middle value is equal to the value then return the index
            return mid;
        } else if (arr[mid] < value) {  //if middle value is less than the value then search in the right side of an array
            start = mid + 1;
        } else {
            end = mid - 1;  //if middle value is greater than the value then search in the left side of an array
        }
    }

    return -1; //if value is not found then return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5));

//bubble sort algorithm
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2]));

//find string is anagram or not
function isAnagram(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');//sort the string
    const sortedStr2 = str2.split('').sort().join('');//sort the string

    if (sortedStr1 === sortedStr2) {
        return "it is an anagram";
    }

    return "it is not an anagram";
}

console.log(isAnagram('listen', 'silent'));

//find the factorial of a number
function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));

//find the count of duplicate values from an array and string
const arr7 = [1, 2, 3, 4, 5, 3, 4, 6, 7];
const str2 = "hello world";
const countDuplicate = (arr) => {
    const count = {};
    arr.forEach((value) => {
        count[value] = count[value] ? count[value] + 1 : 1;
    });

    return count;
}

console.log(countDuplicate(arr7));

const countDuplicateStr = (str) => {
    const count = {};
    str.split('').forEach((value) => {
        count[value] = count[value] ? count[value] + 1 : 1;
    });

    return count;
}

console.log(countDuplicateStr(str2));

//find the count of each character from an string
const str3 = "hello world";
const countChar = (str) => {
    const count = {};
    str.split('').forEach((value) => {
        count[value] = count[value] ? count[value] + 1 : 1;
    });

    return count;
}

console.log(countChar(str3));

//find the vowels and consonants count from an string
const str4 = "hello world";
const countVowelsConsonants = (str) => {
    const count = { vowels: 0, consonants: 0 };
    str.split('').forEach((value) => {
        if (value.match(/[aeiou]/)) {
            count.vowels++;
        } else {
            count.consonants++;
        }
    });

    return count;
}

console.log(countVowelsConsonants(str4));

//find the anagram from an array of strings

const arrayStr = ["listen", "silent", "hello", "world"];

const findAnagram = (arr) => {
    const anagram = {};
    arr.forEach((value) => {
        const sortedValue = value.split('').sort().join('');
        if (anagram[sortedValue]) {
            anagram[sortedValue].push(value);
        } else {
            anagram[sortedValue] = [value];
        }
    });

    return anagram;
}

console.log(findAnagram(arrayStr));


//find the count of each word from an string
const str5 = "hello world hello";

const countWord = (str) => {
    const count = {};
    str.split(' ').forEach((value) => {
        count[value] = count[value] ? count[value] + 1 : 1;
    });

    return count;
}

console.log(countWord(str5));

//check the palindrome
const palindromeString =(str7)=>{ 
    const reverseStr = str7.split('').reverse().join('');

    if (str7 === reverseStr) { 
        return "it is  a palindrome";
    }

    return "it is not a palindrome";
}

console.log(palindromeString('madam'));

//make a class and create an object
class Person { 
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    display(){
        console.log(`Name: ${this.name} and Age: ${this.age}`);
    }
}

const person1 = new Person("shoan", 25);
console.log(person1.display());

//make a class and create an object with getter and setter
class Person2 { 
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get getName(){
        return this.name;
    }

    set setName(name){
        this.name = name;
    }

    display(){
        console.log(`Name: ${this.name} and Age: ${this.age}`);
    }
}

const person2 = new Person2("shoan", 25);
console.log(person2.getName);


const reverseString = (str) => { 
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) { 
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseString('hello, world'));