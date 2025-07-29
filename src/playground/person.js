console.log("person.js is running");


const isAdult = (age) => age>=18;

const canDrink = (age) => age >= 21;

const isSeniorCitizen = (age) => age>=65;


export default isSeniorCitizen;
export {isAdult, canDrink}