const ki = (a,b)=>{
    return a + b;
}


const object_new = {
    Name: "Divyansh",
    Age: 29,
    Location:["India", "USA", "Canada"],
    getNamesLocation(){
       this.Location.forEach((location) =>{console.log("Hi I am in "+location + " My Name is " + this.Name)});
    }
}

object_new.getNamesLocation();


const multipler = {
    number:[3,4,5],
    multiplyBy: 2,
    multiply(){
        return this.number.map((num)=> num* this.multiplyBy);
    }
}
console.log(multipler.multiply());