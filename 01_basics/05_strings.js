const name = "Shivam"
const repoCount = 8

// console.log(name + repoCount + " value ");

console.log(`Hello my name is ${name} my repocount is ${repoCount}`);

const gameName = new String('Shivam-SS-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString =  gameName.substring(-8, 4);
console.log(newString); // zero se always st ignore negative

const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // obey all +ve and -ve by me 

const newStringOne = "  Shivam  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Shivam.com/shivam%45sharma"

console.log (url.replace('%45', '-'));

console.log(url.includes('linkmenihai'))

console.log(gameName.split('-'));
