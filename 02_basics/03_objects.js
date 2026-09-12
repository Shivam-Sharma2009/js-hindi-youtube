// singleton
// Object.create

// object litrals

const mySym = Symbol("key1");

const jsUser = {
    name: "Shivam",
    fullname : "Shivam Sharma",
    [mySym]: "mykey1",
    age: 17 ,
    location: "Varansi",
    email: "Shiavm@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"],
}

// console.log(jsUser.age); // or 
// console.log(jsUser["email"]);
// console.log(jsUser["fullname"]);
// console.log(jsUser[mySym]);

jsUser.email = "Shivam@chatgpt.com"
// Object.freeze(jsUser) 
jsUser.email = "Shivam@microsoft.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS User");   
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}`);   
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());