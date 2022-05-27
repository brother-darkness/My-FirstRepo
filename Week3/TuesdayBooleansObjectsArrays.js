/*2 == "2"; //true
2 === 2; //true
10 % 3;
10 % 3 === 1;
true && false; //false
false || true; //true
true || false; //true


const person = {

    firstName: "David",
    
     
    lastName: "Smith",
    favouriteColour: "Blue" 

}; console.log("This is " + person.firstName + " "+ person.lastName + ", and their favourite colour is" + " " + person.favouriteColour + '."')


const rectangle = {

    length: 10,
    width: 50
};
console.log(`Area of a rectangle = ${rectangle["length"]} x ${rectangle["width"]} = ${(rectangle["length"])*(rectangle["width"])}cm`);


//Adding-removing properties from an object
let newPerson = {

    firstName: "John",
    lastName: "Dunn",
    favouriteNumber: 20,
    favouriteDay: "Friday",

};
console.log(newPerson);
newPerson.favouriteFood= "Toast";
console.log(newPerson)
delete newPerson.favouriteDay;

newPerson.favouriteNumber = newPerson.favouriteNumber*2;
console.log(newPerson);

//Arrays
const favouriteFood = [item1, item2. item3, item4];
const food = ["beef", "venison", "sausage", "fish"]; 

//average sum excercise

const numbers = [5, 6, 7, 8, 9, 10]; 

let sum = 0;

for (const key in numbers){

    sum+= parseInt(number[key])/numbers.length
}
console.log(sum) 

//or

const number = [5, 6, 7, 8, 9, 10]; 
const total = number[0] + number[1] + number[2] + number[3] + number[4] + number[5];
console.log(total / number.length); */

//Excercise 6 - Homework

const user = {

    name:"John",
    age: 5,
    isAdmin: true,
};

for (const key in user) {

    console.log(user["age"])
};

//Excercise 6.1

const myFavNumbers = {

    num1: 10,
    num2: 100,
    num3: 42
};

for (const key in myFavNumbers) {

    console.log(myFavNumbers["num1"] + myFavNumbers["num2"] + myFavNumbers["num3"])
}

// Excercise 9 - Push 

const myRecipe = {

    title: "Mince",
    servings: 1,
    ingredients: ["peas", "onions", "salt", "mince"]
};
console.log(myRecipe, myRecipe.ingredients.length);
myRecipe.ingredients.push ("water");

console.log(myRecipe);













