console.time("code");
document.write("Hello World!");
console.log("Hello World!");
console.warn("This is warning...");
console.error("This is Error!");
console.table([1, 2, 3, 4]); // array
console.table({ num1: '1', num2: '2', num3: '3'}); // object
console.assert( 1 > 2, "It is impossible..!");
console.timeEnd("code"); // time calculation

var a = "10";
console.log(a); // global variable
{
    // let a = "20"; // local variable
    // console.log(a);

    var a = "30"; // global variable updated
}
console.log(a);

const name = "Abhishek";
console.log(name);

var num1 = `This "is" 'an' Example`; // use backquote to add "" or '' in between
console.log(num1);
console.log(typeof num1);

var bol = true; // or flase
console.log(typeof bol);

var num2 = null; // object means premitive data type null
console.log(typeof num2);

var num3;
console.log(num3); // undefined

let num4 = 50;
let num5 = 4;
console.log("Addition of two number is: ", num4 + num5);
console.log("Subtraction of two number is: ", num4 - num5);
console.log("Multiplication of two number is: ", num4 * num5);
console.log("Division of two number is: ", num4 / num5);
console.log("Module of two number is: ", num4 % num5); // gives remainder

// assignment operators
let num6 = 12; // increment operator
num6++;
console.log(num6);

// comparison operator
let num7 = 5;
let num8 = "5";
console.log(num7 == num8); // comparison operator
console.log(num7 === num8); // also check for datatype & values

// logical operators
let num9 = 5;
let num10 = "6";
console.log(num9 != num10); // true
console.log(num9 !== num10); // true
console.log(num9 > num10); // false
console.log(num9 < num10); // true
console.log(num9 <= num10); // true
console.log(num9 >= num10); // false

// logical operators
let num11 = 5;
let num12 = 5;
let num13 = 10;
console.log(num11 == num12 && num11 == num13); // false
console.log(num11 == num12 || num11 == num13); // true
console.log(!(num11 == num12 || num11 == num13)); // false

// type operator
console.log(typeof num11);

let per = 80;
if(per >= 80){
    console.log("You get Mobile");
}else{
    console.log("You won't get anything..!");
}

var main = 85;
let adv = 72;
if (main > 75){
    if (adv > 80){
        console.log("You are eligible for all scholarship");
    }else{
        console.log("You are eligible for some scholarship");
    }
}else{
    console.log("You are not eligible for any scholarship");
}

let cet = 10000;
if (cet >= 4000 && cet < 30000) {
    console.log("You will get BE seat");
} else if (cet >= 3000 && cet < 4000) {
    console.log("You will get B.Sc Agri seat");
} else {
    console.log("Try next Year..!");
}

let choice = 1;
let b = 5;
let c = 6;

switch (choice) {
    case 1:
        console.log("Addition of two numbers is: ", b + c);
        break;

    case 2:
        console.log("Addition of two numbers is: ", b - c);
        break;

    default: console.log("Invalid choice!");
}

let i = 1;
while (i <= 10) {
    console.log("Track:", i);
    i++;
}

let str1 = "Acharya Institute of Technology";
console.log(str1.length);
for(let i = 0; i < str1.length; i++) {
    console.log(str1[i]); // printing all single letter in new lines
}

console.log(str1.toUpperCase());
console.log(str1.indexOf('a'));
console.log(str1.lastIndexOf('o'));
console.log(str1.charAt(3));
console.log(str1.endsWith("Technology"));
console.log(str1.includes("of"));
console.log(str1.replace("of", "Of"));
console.log(str1.substring(0, 12)); // or use slice instead or substring
console.log(str1.split(" ")); // word splits
console.log(str1.split("")); // single letter splits

let arr = [1, 2, 3, 4, 5];
console.log(arr[2]);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]+5); // add 5 to all the arr elements
}
arr.push(33); // appending the number to last
console.log(arr);
arr.unshift(66); // appending the number to first
console.log(arr);
arr.pop(33);
console.log(arr);
arr.shift(); // deletes 1st element
console.log(arr);
arr.splice(1, 2); // deletes number from these indexes
console.log(arr);
arr.reverse();
console.log(arr);

let obj = {
    name: "abhi",
    job: 'student',
    college: 'ait'
}
for (let j in obj) {
    console.log(j); // prints all the keywords of the object
    console.log(obj[j]); // prints all the values of the object
}

function loop(name) {
    for (let i = 0; i<5;i++) {
        console.log(`${name}-${i}`);
    }
}
loop("Abhishek");


function loop2(name) {
    let str = `${name} is a good boy`;
    return str;
}
let abhi = loop2("Abhishek");
console.log(abhi);

let add = (name, job) => `${name} is a ${job}`;
console.log(add("Abhishek", "student"));

let names = () => ({name: "Abhishek"});
console.log(names());