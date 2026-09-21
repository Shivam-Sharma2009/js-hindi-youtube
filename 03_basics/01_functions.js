
function sayMyName(){
    console.log("S");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
    console.log("m");
}

// sayMyName()

// function addTwoNumber(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1,number2){   
    // let result = number1 + number2
    // return result 
    return number1 + number2
}

const result = addTwoNumber(4,5)

// console.log("Result:",result);

function loginUserMessage(username = "sam"){
    if (!username){
        console.log("Please Enter Your UserName");
        return        
    }
    return `${username} just logged In`
}

// console.log(loginUserMessage("Shivam"));
console.log(loginUserMessage("Shivam"));
console.log("03 basic added");