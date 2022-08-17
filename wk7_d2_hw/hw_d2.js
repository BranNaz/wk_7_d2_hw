//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
for (let key in person3) {
    console.log(key, person3[key])
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
// Use an arrow to create the printInfo method
    printInfo() {
        return `Name: ${this.name} \n Age: ${this.age}`
    }

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    addAge = (() =>  {
        const ages = [];
        return (age) => {
            return ages.push(age)
        }
    })()
    countUp = (() => {
        return function() {return this.age++} 
    })()
}

const person1 = new Person('Muhammed', 27)
const person2 = new Person('Mo', 28)
console.log(person1.printInfo())
console.log(person2.printInfo())
console.log(person2.countUp())
console.log(person2.countUp())

// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's 
    length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const func = (num) => {
    return new Promise((resolve, reject)=>{
        if (num.length >= 10){
            resolve('Big Word!')
        }
        else{
            reject('Small number...')
        }
    })
}
const result = func('one thousand')
console.log(result)

//CODEWARS
even_or_odd = (num) => {
    if (num % 2 == 0) {
      return 'Even'; }
    else {
      return "Odd"
    }
}
console.log(even_or_odd(14))