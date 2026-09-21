// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123ab"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "Shivam" , 
            Lastname: "Sharma"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const Obj1 = {1: "a", 2: "b"}
const Obj2 = {3: "c", 4: "d"}
const Obj4 = {5: "c", 6: "d"}

// const Obj3 = {Obj1, Obj2} 
// const Obj3 = Object.assign( {}, Obj1 , Obj2 , Obj4) 

const Obj3 = {...Obj1,...Obj2,...Obj4}

// console.log(Obj3);

const user = [
    {
        id: "1" ,
        email: "S@google.com"
    },
        {
        id: "1" ,
        email: "S@google.com"
    },
        {
        id: "1" ,
        email: "S@google.com"
    }
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "999" ,
    courseInstructor : "Hitesh" ,

}
// course.courseInstructor 

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Shivam" ,
//     "coursename": "js by chai code",
//     "price": "free" ,
// }

[
    {},
    {},
    {}
]
