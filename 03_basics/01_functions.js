
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
// console.log(loginUserMessage("Shivam"));

function calculateCartPrice( val1 , val2, ...num1){
    return num1 
}
// console.log(calculateCartPrice(200,400,600,800));

const user = {
    username: "Shivam" ,
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);   
}

// handleObject(user)
handleObject({
    username: "sam" ,
    price: 399
})

const myNewArray = [ 200 , 400 , 100, 600 ]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));