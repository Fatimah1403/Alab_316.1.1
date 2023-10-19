// ALAB 308H.5.1 - JavaScript Functions
// 1.

function maxOfTwoNumbers(num1, num2) {
    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}   
const max = maxOfTwoNumbers(5, 10);
console.log(max); // 10

// 2
const maxOfThree = function(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= c && b >= a) {
        return b;
    } else {
        return c;
    }
};
const highestThree = maxOfThree(5, 4, 3);
console.log(highestThree); // 5

//3.

function isCharAVowel(vow) {
    if (typeof vow !== "string" || vow.length != 1) {
        return false;
    }
    vow = vow.toLowerCase();
    return "aeiou".includes(vow);
}
console.log(isCharAVowel("e")); // true
console.log(isCharAVowel(2)); // false
console.log(isCharAVowel("i")); // true
console.log(isCharAVowel("z")); // false
console.log(isCharAVowel("v")); // false

// 4
const sumArray = function(array) {
    let sum = 0;
    let i = 0;
    for (i; i < array.length; i++) {
     sum +=array[i];
    }
    return sum;
};
const num = [1, 3, 4, 5, 8, 10];
const result = sumArray(num);
console.log(result); // 31

// 5
function multiplyArray(arr) {
    let multiply = 1;
    let i = 0;
    for (i; i < arr.length; i++) {
     multiply *=arr[i];
    }
    return multiply;
}
const num2 = [1, 3, 4, 5,];
const result2 = multiplyArray(num2);
console.log(result2); // 60

// 6
const numArgs = function() {
    return arguments.length;
};

console.log(numArgs(1, 2, 3)); // 3
console.log(numArgs("Boy", "Girl", "Woman", "Man")); // 4


