//NOTE:PSEUDOCODE DILANJUTKAN NANTI SORE

/*
Write a code to display the multiplication table of a given integer.
Example :   Number → 9
Output  :   ■ 9 x 1
            ■ 9 x 2
            ■ …
            ■ 9 x 10
*/

let number=9;
for(i=1;i<=10;i++){
    console.log(`${number} x ${i} = ${number*i}`);
}

/*
Write a code to check whether a string is a palindrome or not.
Example : ‘madam’ → palindrome
*/

let word="Madam";
let isPalindrome="";

for(let i=word.length-1;i>=0;i--){
    isPalindrome+=word[i];
}

if(isPalindrome.toLowerCase()===word.toLowerCase()){
    console.log(`${word} is a palindrome`);
}else{
    console.log(`${word} is not palindrome`);
}

/*
Write a code to convert centimeter to kilometer.
Example : 100000 → “1 km”
*/

centimeter=100000
let kilometer = centimeter/100000
console.log(`${centimeter} cm = ${kilometer} km`);

/*
Write a code to format number as currency (IDR)
Example : 1000 → “Rp. 1.000,00”
*/

let ammount=1000;
let rupiah = new Intl.NumberFormat("id-ID", {style:"currency", currency:"IDR"}).format(ammount);
console.log(rupiah);

/*
Write a code to remove the first occurrence of a given “search string” from a string
Example : string = “Hello world”, search string = “ell” → “Ho world”
*/

let string = "hEllo wOrld";
let searchString = "ell";
let removeString;
let index = string.toLowerCase().indexOf(searchString);

if(index !==-1){
    removeString=string.substring(0,index)+ string.substring(index+searchString.length);
}else{
    return removeString=string;
}

console.log(`Remove the word ${searchString} from ${string} = ${removeString}`);

/*
Write a code to capitalize the first letter of each word in a string
Example : “hello world” → “Hello World”
*/

let capitalize=string.split(' ').map(string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()).join(' ');
console.log(`${string} = ${capitalize}`);

/*
Write a code to reverse a string.
Example : “hello” → “olleh”
*/
wordReverse="hello";
reverse="";
for(let i=wordReverse.length-1;i>=0;i--){
    reverse+=wordReverse[i];
}
console.log(`${wordReverse} = ${reverse}`);

/*
Write a code to swap the case of each character from string 
Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
*/

let stringSwap = "The QuiCk BrOwN Fox";
let swap = "";

for (let i = 0; i < stringSwap.length; i++) {
    let currentChar = stringSwap[i];

    if (currentChar === currentChar.toUpperCase()) {
        swap += currentChar.toLowerCase();
    } else {
        swap += currentChar.toUpperCase();
    }
}
console.log(`${stringSwap} = ${swap}`);

/*
Write a code to find the largest of two given integers
Example : num1 = 42, num2 = 27 → 42
*/

let num1 = 42, num2 = 27;
let largest;

if (num1 > num2) {
    largest = num1;
} else {
    largest = num2;
}

console.log(`The largest number is ${largest}`);

/*
Write a conditional statement to sort three numbers
Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
*/

let num3=18;
let order="";

if (num1 <= num2 && num1 <= num3) {
    order += num1;
    if (num2 <= num3) {
        order += ", " +num2;
        order += ', ' +num3;
    } else {
        order += ", " +num3;
        order += ", " +num2;
    }
} else if (num2 <= num1 && num2 <= num3) {
    order = num2;
    if (num1 <= num3) {
        order += ", " +num1;
        order += ", " +num3;
    } else {
        order += ", " +num3;
        order += ", " +num1;
    }
} else {
    order = num3;
    if (num1 <= num2) {
        order += ", " +num1;
        order += ", " +num2;
    } else {
        order += ", " +num2;
        order += ", " +num1;
    }
}

console.log(order);

/*
Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data 
type.
Example : “hello” → 1
*/

let input = "hello";

if (typeof input === "string") {
    console.log(`${input} → 1`);
} else if (typeof input === "number") {
    console.log(`${input} → 2`);
} else {
    console.log(`${input} → 3`);
}

/*
Write a code to change every letter a into * from a string of input
Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*
*/

let inputString = 'An apple a day keeps the doctor away';

let changeString = '';
for (let i = 0; i < inputString.length; i++) {
    if (inputString[i].toLowerCase() === 'a') {
        changeString += '*';
    } else {
        changeString += inputString[i];
    }
}

console.log(inputString, " = ", changeString);