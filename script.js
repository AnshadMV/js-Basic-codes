// function operations(arr) {
//     let X = 0;
//     for (let op of arr) {
//         if (op.includes("++")) {
//             X += 1;
//         } else if (op.includes("--")) {
//             X -= 1;
//         }
//     }
//     return X;
// }

// // Examples
// console.log(operations(["--X", "X++", "X++"])); // 1
// console.log(operations(["++X", "++X", "X++"])); // 3
// console.log(operations(["X++", "++X", "--X", "X--"])); // 0





// function runningTotal(val){
//     let sum=0
//     let result=[];
//     for (let x in val ){
//         sum+=val[x];
//         result.push(sum);
//     }
//     return result;

// }
// let val=[1, 2, 3, 4]
// console.log(runningTotal(val));
// Examples
// ● runningTotal([1, 2, 3, 4]) ➞ [1, 3, 6, 10]
// ● runningTotal([5, -2, 10]) ➞ [5, 3, 13]
// ● runningTotal([ ]) ➞ [ ]




// function compressString(str) {
//     let compressed = "";
//     let count = 1;

//     for (let i = 0; i < str.length; i++) {

//           if (str[i] === str[i + 1]) {
//             count++;
//         } else {  compressed += str[i] + (count > 1 ? count : "");
//             count = 1;
//         }
//     }

//     return compressed.length < str.length ? compressed : str;
// }

// // Examples
// console.log(compressString("aaabbc")); // "a3b2c3"
// console.log(compressString("abcd"));     // "abcd"
// console.log(compressString("aabbcc"));   // "a2b2c2"


// function countFrequency(arr) {
//     let freq = {};
//     for (let item of arr) {
//         if (Object.keys(freq).includes(item)) {
//             freq[item]=freq[item]+1;
//         } else {
//             freq[item] = 1;
//         }
//     }
//     return freq;
// }

// // // Examples
// console.log(countFrequency(["apple", "banana", "apple", "orange", "banana", "apple"]));
// // { apple: 3, banana: 2, orange: 1 }


// or
// function countFrequency(arr) {
//     let freq = {};
//     let val = arr.split(" ");   // ✅ save the split result into an array of words
//     for (let item of val) {     // ✅ iterate over words
//         if (freq[item]) {
//             freq[item]++;
//         } else {
//             freq[item] = 1;
//         }
//     }
//     return freq;
// }

// console.log(countFrequency("apple banana apple orange banana apple"));


// function countFrequency(arr) {
//     let freq = {};
//     arr.split(" ");   // ❌ split result is NOT stored
//     for (let item of arr) {   // ❌ still looping over the original string
//         if (freq[item]) {
//             freq[item]++;
//         } else {
//             freq[item] = 1;
//         }
//     }
//     return freq;
// }

// console.log(countFrequency("apple banana apple orange banana apple"));
// { a: 10, p: 6, l: 3, e: 4, ' ': 5, b: 2, n: 5, o: 1, r: 1, g: 1 }

// console.log(countFrequency(["cat", "dog", "cat", "bird", "dog", "dog"]));
// // { cat: 2, dog: 3, bird: 1 }

// console.log(countFrequency(["pen", "Pen", "pencil", "eraser", "pen", "pencil"]));
// // { pen: 1, Pen: 1, pencil: 2, eraser: 1 }



// function toggleCounter(arr) {
//   let counter = 0;
//   for (let op of arr) {
//     if (op === "ON") counter++;
//     else if (op === "OFF") counter--;
//   }
//   return counter;
// }

// // Examples
// console.log(toggleCounter(["ON", "OFF", "ON", "ON"])); // 2
// console.log(toggleCounter(["OFF", "OFF", "ON"]));      // -1
// console.log(toggleCounter([]));                        // 0



// function flipBinary(arr) {
//   return arr.map(num => num === 0 ? 1 : 0);
// }

// // Examples
// console.log(flipBinary([1, 0, 0, 1, 1]));
// console.log(flipBinary([0, 0, 0, 0]));
// console.log(flipBinary([1, 1, 0, 1, 0, 0]));




// function isPositiveDominant(arr) {
//   let positives = new Set();
//   let negatives = new Set();

//   for (let num of arr) {
//     if (num > 0) positives.add(num);
//     else if (num < 0) negatives.add(num);
//   }

//   return positives.size > negatives.size;
// }

// // Examples
// console.log(isPositiveDominant([1, 1, 1, 1, -3, -4])); // false
// console.log(isPositiveDominant([5, 99, 832, -3, -4])); // true
// console.log(isPositiveDominant([5, 0]));               // true
// console.log(isPositiveDominant([0, -4, -1]));          // false



// function countCharacters(sentence) {
//   let result = {};
//   for (let char of sentence) {
//     if (char !== " ") {
//       result[char] = (result[char] || 0) + 1;
//     }
//   }
//   return result;
// }

// // Examples
// console.log(countCharacters("I love javascript"));
// console.log(countCharacters("hello world"));
// console.log(countCharacters("Bridgeon"));



// function findIndex(arr, target) {
//     let result = [];
//     let sum=0;
//     let indices = "";
//     for (let i = 0; i < arr.length; i++) {
//          sum = arr[i];
//          indices = [i];
//         for (let j = i + 1; j < arr.length; j++) {
//             if (sum + arr[j] <= target) {
//                 sum += arr[j];
//                 indices.push(j);
//             }
//         }
//         if (sum === target) {
//             result = indices;
//             break;
//         }
//     }
//     return result;
// }

// // Examples
// console.log(findIndex([2, 7, 11, 15], 9));     // [0, 1]
// console.log(findIndex([8, 1, 22, 1, 13, 1], 3)); // [1, 3, 5]





// function missingNumber(arr) {
//   arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length ; i++) {
//     if (arr[i + 1] - arr[i] !== 1) {
//       return arr[i] + 1;
//     }

//   }
//   return arr; // If no missing number
// }

// // Examples
// console.log(missingNumber([1, 2,3, 4, 5,7]));        // 3
// console.log(missingNumber([10, 12, 13, 14]));    // 11





// function oddOrEven(num) {
//   let sum = num.toString().split("").reduce((acc, digit) => acc + Number(digit), 0);
//   return sum % 2 === 0 ? "Even" : "Odd";
// }

// console.log(oddOrEven(43));    // Odd
// console.log(oddOrEven(373));   // Odd
// console.log(oddOrEven(4433));  // Even


// function sumObjectValues(obj) {
//     let sum = 0;
//     for (const value in obj) {
//         sum += obj[value];
//     }
//     return sum;
// }


// or
// function sumObjectValues(obj) {
//   let sum = 0;
//   for (const value of Object.values(obj)) {
//     sum += value;
//   }
//   return sum;
// }

// or

// function sumObjectValues(obj) {
//   return Object.values(obj).reduce((acc, val) => acc + val, 0);
// }
// // Examples
// console.log(sumObjectValues({ first: 1, second: 6, third: 5 }));     // 12
// console.log(sumObjectValues({ first: 1, second: -6, third: 10 }));   // 5
// console.log(sumObjectValues({ first: 3, second: 2.6, third: 10 }));  // 15.6

// console.log(sumObjectValues({ first: 1, second: 6, third: 5 }));     // 12
// console.log(sumObjectValues({ first: 1, second: -6, third: 10 }));   // 5
// console.log(sumObjectValues({ first: 3, second: 2.6, third: 10 }));  // 15.6



// function mostFrequent(arr) {
//   let freq = [];
//   let maxCount = 0;
//   let mostCommon = null;

//   for (let item of arr) {
//     freq[item] = (freq[item] || 0) + 1;
//     if (freq[item] > maxCount) {
//       maxCount = freq[item];
//       mostCommon = item;
//     }
//   }
//   return mostCommon;
// }

// // Examples
// console.log(mostFrequent([1, 3, 2, 3, 4, 3, 5, 2, 3])); // 3
// console.log(mostFrequent(["apple", "apple","bridgeon", "orange", "bridgeon"])); // bridgeon



// function diffSums(n, m) {
//   let sumDivisible = 0;
//   let sumNotDivisible = 0;

//   for (let i = 1; i <= n; i++) {
//     if (i % m === 0) sumDivisible += i;
//     else sumNotDivisible += i;
//   }

//   return sumNotDivisible - sumDivisible;
// }

// let val=[10,3];
// console.log(diffSums(val[0],val[1])); // 19


// function checkLastDigit(numStr) {
//   let lastDigit = numStr[numStr.length - 1];
//   let count = numStr.split("").filter(d => d === lastDigit).length;
//   return count > 1 ? "Match" : "Unique";
// }

// // Examples
// console.log(checkLastDigit("727"));  // Match
// console.log(checkLastDigit("1234")); // Unique




// function checkLastDigit(numStr) {
//     let lastDigit = numStr[numStr.length - 1];
//     let count = numStr.split("").filter(d => d === lastDigit).length;
//     return count > 1 ? "Match" : "Unique";
// }

// // Examples
// console.log(checkLastDigit("727"));  // Match
// console.log(checkLastDigit("1234")); // Unique




// function reverseofeachstring(val){
//     let str=String(val)
//     let r;
//     let rev=str.split(" ")
//     for ( let x of rev)
//     {
//         if (x==" ")
//         {
//             continue
//         }
//         else {
//            r= rev.join("")
//         }
//     }
//     return r;
// }

// console.log(reverseofeachstring("l love javascript"))

// tpircsavaj evol l


// function reverseOfEachString(val) {
//     return val
//         .split(" ")                    // split into words
//         .map(word => word.split("").reverse().join(""))  // reverse each word
//         .join(" ");                     // join back into a string
// }

// console.log(reverseOfEachString("l love javascript"));
// l evol tpircsavaj
