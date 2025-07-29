function square(x){
    return x * x;
}

console.log("Function output:", square(3));

const squareArrow = (x) =>{
    return x * x;
}

console.log("Arrow function output:", squareArrow(4));


const shortVariable = (x) => x*x;
console.log("Short arrow function output:", shortVariable(5));

function getFirstName(fullName){
    return fullName.split(' ')[0];
}

console.log("First Name function", getFirstName("Mike Ross"));

const arrowFunction = (fullName) => { return fullName.split(' ')[0];} 
console.log("First Name Arrow Function", arrowFunction("Miker NewRoss"));

const arrowNewFunction = (fullName) => fullName.split(' ')[0]
console.log("First Name New Arrow Function", arrowNewFunction("New Miker NewRoss"));

const gt = function(x){
   return 2*x;
}

console.log("ggt", gt(3));
