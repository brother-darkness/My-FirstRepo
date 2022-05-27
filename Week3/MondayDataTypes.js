const herWord = 
'The exact phrase she used was "There is no wat we will get there in time.'; {
    console.log (herWord);
}
const herWord2 =
 'Remember to say "please" and "thank you."'; {
     console.log (herWord2);
 }

 //Escape characters example
const first = "\"It's six o'clock,\" she said";
const second = 'Remember to say "please" \'and\' "thank you."'

//Note = Can also use backticks `` <--

//Concatenating Strings example
const message ='Hello' + ' ' + 'World';
console.log(message); // Hello World

//String lengths
const myMessage = "Teapot";
console.log(myMessage.length); //Output: 6

//Selecting the last character of a string
console.log(myMessage[myMessage.length - 1]); // Output: t (common practice)
console.log(myMessage.charAt(-1)); // Output: t (As of ES 2022)

//String Excercise
const myString = '"Concentrate all your thoughts '
const myStringSecond = "upon the work in hand. The sin's rays do not burn "
const myStringThird = 'until brought to a focus."'
const myStringFourth = " - Alexander Graham Bell"; {
    wordLength = myString + myStringSecond + myStringThird + myStringFourth; 
                   console.log(wordLength);
                   console.log(wordLength.length);
        
    
}

//Prompt Excercise
const userMessage = prompt("Enter Statement"); 
const trimmedUserMessage = userMessage.trim();

if(trimmedUserMessage.length<=10) {
    alert(trimmedUserMessage.toUpperCase());
}
if(trimmedUserMessage.length > 10) {
    alert(trimmedUserMessage.toLowerCase());
}


2 == "2";
2 == 2;
10 % 3;
10 % 3 === 1;
true && false;
false || true;
true || false;


    



