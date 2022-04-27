// Q1) Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.

// Input:
// addFive(5);
// addFive(0);
// addFive(-5);

// Output:
// 10
// 5
// 0

// Answer
var num = -5;
function addFive(num) { 
num=num+5;
return num;
}
var result = addFive(num)
console.log(result);


// Q2)Write a function called “getOpposite”.
// Given a number, return its opposite
// Input:
// getOpposite(5);
// getOpposite(0);
// getOpposite(-5);
// getOpposite(“5a”);
// getOpposite(5.5);
// Output:
// -5
// 0
// 5
// -1
// -1

// Answer
var num = 5.5;
function getOpposite(num) {
    if(typeof num==="number"){
        var res = num-Math.floor(num) ? "float" : "not float";
        if(res==="not float"){
            num=num*(-1);
        }else{
            num=-1;
        }
    }else{
        num=-1;
    }
    return num;
}
var result = getOpposite(num)
console.log(result);


// Q3)Fill in your code that takes an number minutes and converts it to seconds.
// Examples
// toSeconds(5) ➞ 300
// toSeconds(3) ➞ 180
// toSeconds(2) ➞ 120

// Answer
var min=5;
function toSeconds(num){
    return (num*60);
}
var secs = toSeconds(min);
console.log(secs);



// Q4) Create a function that takes a string and returns it as an integer.
// Examples
// toInteger(“6”) ➞ 6
// toInteger(“1000”) ➞ 1000
// toInteger(“12”) ➞ 12

// Answer
var mystr = "1000";
function toInteger(mystr) {
    return parseInt(mystr);
}
var myint = toInteger(mystr)
console.log(myint);



// Q5) Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// Examples
// nextNumber(0) ➞ 1
// nextNumber(9) ➞ 10
// nextNumber(-3) ➞ -2

// Answer
var myint = -3;
function nextNumber(myint) {
    return ++myint;
}
var myNextint = nextNumber(myint)
console.log(myNextint);


// Q6) Create a function that takes an array and returns the first element.
// Examples
// getFirstElement([1, 2, 3]) ➞ 1
// getFirstElement([80, 5, 100]) ➞ 80
// getFirstElement([-500, 0, 50]) ➞ -500

// Answer
var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement(arr);
console.log(data);


// Q7) Convert Hours into Seconds
// Write a function that converts hours into seconds.
// Examples
// hourToSeconds(2) ➞ 7200
// hourToSeconds(10) ➞ 36000
// hourToSeconds(24) ➞ 86400

// Answer
var hours=24;
function hourToSeconds(num) {
    return num*60*60;
}
var secs = hourToSeconds(hours);
console.log(secs);


// Q8)Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.
// Examples
// findPerimeter(6, 7) ➞ 26
// findPerimeter(20, 10) ➞ 60
// findPerimeter(2, 9) ➞ 22

// Answer
function findPerimeter(num1,num2) {
    return 2*(num1+num2);
}
var peri = findPerimeter(20,10);
console.log(peri);


// Q9) Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37
// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// Answer
function lessThan100(num1,num2) {
    return num1+num2<100 ? true : false;
}
var res = lessThan100(22,15);
console.log(res);


// Q10) There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed 
// as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// Examples
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0

// Answer
function remainder(num1,num2) {
    return num1%num2;
}
var res = remainder(5,5);
console.log(res);


// Q11) Old macdonald had a farm:
// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that 
// returns the total number of legs of all the animals.
// Examples
// CountAnimals(2, 3, 5) ➞ 36
// CountAnimals(1, 2, 3) ➞ 22
// CountAnimals(5, 2, 8) ➞ 50

// Answer
function CountAnimals(tur,horse,pigs) {
    return 2*tur+4*horse+4*pigs;
}
var legs = CountAnimals(5,2,8);
console.log(legs);


// Q12) Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// Examples
// frames(1, 1) ➞ 60
// frames(10, 1) ➞ 600
// frames(10, 25) ➞ 15000

// Answer
function frames(num1,num2) {
    return (num1*60)*num2;
}
var fps = frames(10,25);
console.log(fps);


// Q13) Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
// Examples
// divisibleByFive(5) ➞ true
// divisibleByFive(-55) ➞ true
// divisibleByFive(37) ➞ false

// Answer
function divisibleByFive(num1) {
    return num1%5===0 ? true : false;
}
var divisible = divisibleByFive(37);
console.log(divisible);


// Q14) Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.

// Input:
// isEven(12);
// isEven(0);
// isEven(11);
// isEven(“11h”);
// Output:
// true
// true
// false
// -1

// Answer
function isEven(num){
    if(typeof num==="number"){
       return num%2===0 ? true : false;
    }else{
        return -1;
    }
   }
var even = isEven(12);
console.log(even);


// Q15) Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

// Input:
// areBothOdd(1, 3);
// areBothOdd(1, 4);
// areBothOdd(2, 3);
// areBothOdd(0, 0);
// Output:
// true
// flase
// flase
// flase

// Answer
function areBothOdd(num1, num2){
    return num1%2 !== 0 && num2%2 !== 0 ? true : false;
   }
var res = areBothOdd(0,0);
console.log(res);


// Q16) Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

// Input:
// getFullName(“GUVI”, “GEEK”);
// getFullName(“GUVI”, );
// getFullName(, “GEEK”);
// getFullName(“”, “”);
// Output:
// “GUVI GEEK”
// “GUVI”
// “GEEK”
// “”

// Answer
function getFullName(firstName, lastName){
    return (`${firstName} ${lastName}`).trim();
   }
var res=getFullName("GUVI", "GEEK");
console.log(res);


// Q17) Problem:
// Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.
// Input:
// getLengthOfWord(“GUVI”);
// getLengthOfWord(“”);
// getLengthOfWord();
// getLengthOfWord(9);
// Output:
// 4
// 0
// -1
// -1

// Answer
function getLengthOfWord(word){
   return  typeof word === "string" ? word.length : -1;
}
var result = getLengthOfWord("GUVI");
console.log(result);


// Q18) Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.
// Input:
// isSameLength(“GUVI”, “GEEK”);
// Output:
// true

//Answer
function isSameLength(word1, word2){
    return  word1.length === word2.length ? true : false;
 }
 var result = isSameLength("GUVI", "Geek");
 console.log(result);


// Q19)Create a function to calculate the distance between two points defined by their x, y coordinates

//Answer
function getDistance(x1, y1, x2, y2)
{
  return Math.pow(Math.pow((x1 - x2), 2) +  Math.pow((y1 - y2), 2), 0.5);
}
console.log(getDistance(100, 100, 400, 300));


// Q20) Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. 
// If the array has a length of 0, it should return ‘undefined’.
// Input:
// getNthElement([1, 3, 5], 1);
// Output:
// 3

// Answer
function getNthElement(array,n){
    return !array.length ? "undefined" : array[n];
}
var res = getNthElement([1, 3, 5], 1);
console.log(res);


// Q21)Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
// Input:
// getLastElement([1, 2, 3, 4]);
// Output:
// 4

// Answer
function getLastElement(array){
    return array.length ? array.pop() : -1;
}
var res = getLastElement([1,2,3,4]);
console.log(res);


// Q22) Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. 
// If there is no property at the given key, it should return undefined.

// var obj = {
// mykey: “value”
// };
// Input:
// getProperty(obj,’mykey’);
// getProperty(obj,’dummykey’);
// Output:
// value
// NA

// Answer:
var obj = {
    mykey: "value"
   };
function getProperty(obj,key) {
return obj[key] ? obj[key] : "undefined";
}
var res = getProperty(obj,"mykey");
console.log(res);


// Q23) Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.

// var obj = {
// }
// Input:
// addProperty(obj, “mykey”);
// Output:
// {
// mykey: true
// }

// Answer
var obj = {
    mykey: "value"
   };
function addProperty(obj, key){
obj[key]=true;
}
addProperty(obj,"yourkey");
console.log(obj);


// Q24) Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.
// Input:
// removeProperty(obj, “name”);
// Output:
// undefined

// Answer:
var obj = {
    mykey: "value",
    yourkey: true
   };
function removeProperty(obj, key){
delete obj[key];
}
removeProperty(obj,"yourkey");
console.log(obj);
console.log(obj['yourkey']);


// Q25) Return an array, where the first element is the count of positives numbers and the second element
//  is sum of negative numbers.

// Answer
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    var count=0;
    var sum=0;
    for(var i of arr) {
        if(i>=0){
            count=count+1;
        }else{
            sum=sum+i;
        }
    }
    return [count,sum];
}
console.log(ar2(arr));


// Q26) Create a function that receives an array of numbers and returns an array containing only the positive numbers

// Answer:
function getPositives(ar)
{
    var res =[]
    for(var i of ar) {
        if(i>0){
            res.push(i);
        }
    }
    return res;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);


// Q27) Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
// n = 0 -> 2⁰ -> [1]
// n = 1 -> 2⁰, 2¹ -> [1,2]
// n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]
// Input:
// powersOfTwo(0)
// powersOfTwo(1)
// powersOfTwo(2)
// Output:
// 1
// 1,2
// 1,2,4

// Answer:
function powersOfTwo(n){
    var res=[];
    for(var i=0; i<=n; i++){
        res.push(Math.pow(2,i));
    }
    return res;
}
var result = powersOfTwo(4);
console.log(result);


// Q29) Find the maximum number in an array of numbers

// Answer:
function findMax(ar)
{
    var max=0;
    for(var i of ar){
        if(i>max){
            max=i;
        }
    }
    return max;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);


// Q30) Print the first 100 prime numbers

// Answer:
printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n){
    var prime;
    if(n===2){
        prime=true;
    } else{
        for(var i=2;i<n;i++){
            if(n%i !== 0)
            {
                prime=true;
            } else{
                prime=false;
                break;
            }
        }
    }
    return prime;
}



// Q31) Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”

// Answer:
console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
    var n = 0;
    var i = startAt+1;
    
    while(n < nPrimes)
    {
        if (isPrime1(i))
        {
            console.log(n, " → ", i);
            n++;
        }
        
        i++;
    }
}
// Returns true if a number is prime
function isPrime1(n)
{
    var prime;
    for(var i=2;i<n;i++){
        if(n%i !== 0)
        {
            prime=true;
        } else{
            prime=false;
            break;
        }
    }
    return prime;
}


// Q32) Reverse a string

// Answer:
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   var arr=s.split("");
   arr.reverse();
   var reverseString=arr.join("");
   return reverseString;
}


// Q33) Create a function that will merge two arrays and return the result as a new array

// Answer
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 for(let el of ar2)
 {
 result.push(el);
 }
 return result;
}


// Q34) Calculate the sum of numbers received in a comma delimited string

// Answer:
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
  var arr=s.split(",");
  var sum=0;
  for(var i of arr){
      sum = sum + parseFloat(i);
  }
  return sum;
}