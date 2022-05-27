//document.body.innerHTML = "<h1>Hello world</h1>";
//document.body.style.fontSize = "20px";

//let currentColour=0;
//function changeColour() {
//const colourArray=[
// "purple",
 //"green",
// "orange",
 //"yellow",
// "cyan",
// "red",
//];

//if (currentColour === 5) {
//    currentColour = 0;
//} else {
//    currentColour++;
//}
//    if (document.body.style.background==="blue") {
//        document.body.style.background="white";
///    } else {
//        document.body.style.background="blue";
//    }
//}


//currentColour=currentColour=1
//document.body.style.background=colourArray[currentColour];


///////////////////////////////////////

//const helloWorldHeader = document.getElementById("helloWorldHeader");

//helloWorldHeader.style.fontSize = "50px";
//helloWorldHeader.textContent = "Woah, the text is different now!";

//const helloWorldSelector = document.querySelector("h1");
//helloWorldSelector.style.fontsize="100px";

//letchangeNumber=0;
//function changeNumber() {

//    if (changeNumber => 0) {
//        changeNumber++
//    }
    


//} 
//document.querySelector(h1)


const inputElement = document.querySelector("input");
inputElement.addEventListener("input", logValue);
function logValue(e) {
    console.log(e.target.value);
}
