// Primitive data type

// 7 type: String, Number ,boolean , null , undefined , Symbol, BigInt

const Score = true
const ScoreValue = 100.3

const isLoggedIn = true;
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 63432475583246682536577n


// Refrance (Non Primitive)

// Array ,Object ,Functions

const heros = ["Saktiman", "Naagraj", "Doga"]
let obj = {
    name: "Shivam",
    age: 17,
    
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof Score);
