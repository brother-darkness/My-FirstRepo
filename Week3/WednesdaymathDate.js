const myDate = new Date(); //current date and time
console.log(myDate);

const pastDate = new Date(2020, 1, 20);
console.log(pastDate.getFullYear());

const options = {
    hour:"numeric",
    minute:"numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",

}

const myFormattedDate = new Intl.DateTimeFormat("en-NZ", options).format(myDate)
console.log(myFormattedDate);

//Excercise 1
const myBirthDay = new Date (1999, 1, 21);
console.log("My Birthday: ",myBirthDay)

// Excercise 2 - Math methods

const myFavNumbers = Math.min(10, 30, 12)
console.log(myFavNumbers) // lowest
console.log(Math.max(5, 8, 9)); // highest
console.log(Math.sqrt(myFavNumbers)) // squared

//-----------------------------------------------------------------------------
// FUNCTIONS

function myFirstFunction() {
    console.log("Hey there my first function");
}

myFirstFunction(); // this will run the function above

// Function Parameters

function funcWithParams (num1, num2) //These are the parameters  = placehole value
{
    console.log(num1+num2) //adds values of num1 and num 2
}

funcWithParams(3, 4) //These are arguments = actual value

// Excercise 1
function funcString (str1, str2) {

    console.log(str1, str2)
}

funcString ("Blue", "Sky")

// Excercise 2 - Combining 2 strings

function myCon (con1, con2) {

    console.log(con1 + con2)
}

myCon ("This ", "Guy");


//Excercise 3 - Returns

function myReturn (Ret1) {

    if(Ret1 === "") {
        return console.log(false)
    } 
    else (console.log(true));


}
myReturn("") 

//Reuben's example
function isStringEmpty(string) { //note and empty string always == false
    if (string) {
        return true;
    } else {
        return false; //Remember: DRY
    }
    
}
console.log(isStringEmpty(""));


const person = {
    firstName: "Buddy",
    favCol: "pink",
    greeting(name) {
        console.log(`Hi ${name}!`)
    }
};

// Excercise 4.1
function halfNumber (aNumber) {
    const halvedNumber = aNumber/2;
    return halvedNumber
}

let halfNumber23 = halfNumber(23)
console.log(halfNumber23)


//Excercise 4.2
function getTimeinSeconds(timeInMinutes) {
    const timeInSeconds=timeInMinutes*60;
    return timeInSeconds
}

const userInputMinutes= Number.parseInt(prompt("Enter in a number","5"))
getTimeInSeconds(userInputMinutes)
alert(`${UserInputMinutes} minutes is ${timeInSeconds}`)