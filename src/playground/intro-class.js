// class Person{
//     constructor(name, age){
//         this.name = name || "Chutiya Name";
//         this.age = age || 0;
//         console.log("I am here");
//     }
// }


class Person{
    constructor(name ='Anonymous', age = 0){
        this.name = name;
        this.age = age;
        console.log("I am here");
    }

    getDescription() {
        return `My name is ${this.name} and I am ${this.age} years old`;
    }
}


class Student extends Person{
    constructor(name, age, major){
        console.log("I am here in Student");
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription()
        if(this.hasMajor()){
            description = description + ` my major is ${this.major}`;
        }
        return description;
    }
}

class Traveller extends Person{
    constructor(name, age, homelocation){
        console.log("I am here in Traveller");
        super(name, age);
        this.homelocation = homelocation;
    }

    hasHomeLocation(){
        return !!this.homelocation;
    }

    getDescription(){
        let description = super.getDescription();
        if(this.hasHomeLocation()){
            description = description + ` I am visiting from ${this.homelocation}`;
        }
        return description;
    }
}



// const person1 = new Student('Divyansh', 25, 'Computer Science');
// console.log(person1.getDescription())


// const person2 = new Student();
// console.log(person2);

const traveller1 = new Traveller(undefined, undefined, 'India');
console.log(traveller1.getDescription());