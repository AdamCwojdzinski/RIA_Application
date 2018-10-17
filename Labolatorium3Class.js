// Exercise 1
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    introduce(name, age){
        return "Hi I'm " + this.name + " and I'm " + this.age + " years old"
    }
}

var person = new Person("Artur", 34);
console.log(person.introduce());
person.name = "Adam";
person.age = 30;
console.log(person.introduce());

// Exercise 2
/*class Employee extends Person{
    constructor (name, age, speciality){
        super(name, age)
        this.speciality = speciality
    }
    introduce(name, age, speciality){

        return super.introduce(this.name, this.age) + " I work as " + this.speciality
    }
}

var employee = new Employee("Adam", 31, "Developer");
console.log(employee.introduce());*/

// Exercise 3
/*class Person {
    constructor (name, age){
        this._name = name
        this._age = age
    }
    set name(newName){
        this._name = newName
    }
    set age(newAge){
        this._age = newAge
    }
    get name(){
        return this._name
    }
    get age(){
        return this._age
    }
}

var person2 = new Person2("Karol", 55);
console.log("Hi I'm " + person2.name + " and I'm " + person2.age + " years old");
person2.name = "Wojciech";
person2.age = 45;
console.log("Hi I'm " + person2.name + " and I'm " + person2.age + " years old");*/

// Exercise 4
/*
class Person{
    constructor (name, age){
        this._name = Person.checkName(name)
        this._age = age
    }
    set name(newName){
        this._name = Person.checkName(newName)
    }
    set age(newAge){
        this._age = newAge
    }
    get name(){
        return this._name
    }
    get age(){
        return this._age
    }
    static checkName(name){
        var nameToString = name.toString();
        var valueCheckName = nameToString.split(" ").map((nameToString) => nameToString.charAt(0).toUpperCase() + nameToString.substring(1).toLowerCase())
        return valueCheckName;
    }
}

var person = new Person("kaROL", 21);
console.log("Hi I'm " + person.name + " and I'm " + person.age + " years old");
person.name = "tADEusZ";
console.log("Hi I'm " + person.name + " and I'm " + person.age + " years old");
*/

// Exercise 5

/*class Person{
    constructor (name, age){
        this._name = name
        this._age = age
    }
    set name(newName){
        this._name = newName
    }
    set age(newAge){
            if ( typeof(newAge) != 'number'){
                throw new TypeError("Please enter a numerical value")
                console.log(e.message)
            }
            if ( newAge <= 0 ){
                throw new RangeError("Please enter a positive number")
                console.log(e.message)
            }
            this._age = newAge
    }
    get name(){
        return this._name
    }
    get age(){
        return this._age
    }


var person = new Person("Jan", 21);
console.log("Hi I'm " + person.name + " and I'm " + person.age + " years old");
//person.age = "sto";
person.age = -10;
person.age = 41;
console.log("Hi I'm " + person.name + " and I'm " + person.age + " years old");
*/

// Exercise 6

/*
class Person{
    constructor (name, age){
        this._name = name
        this._age = age
    }
    set name(newName){
        this._name = newName
    }
    set age(newAge){
        try {
            if ( typeof(newAge) === 'string'){
                throw new TypeError("numerical value")
            }
            if ( newAge <= 0 ){
                throw new RangeError("positive number")
            }
            this._age = newAge

        } catch (err) {
            if (err instanceof TypeError){
                console.log("Please enter a " + err.message)
            } else if (err instanceof RangeError){
                console.log("Please enter a " + err.message)
            } else {
                console.log("oops!!")
            }
        }
    }
    get name(){
        return this._name
    }
    get age(){
        return this._age
    }
}

var person = new Person("Jan", 21);
console.log("Hi I'm " + person.name + " and I'm " + person.age + " years old");
person.age = "sto";
person.age = -10;
person.age = 41;
console.log("Hi I'm " + person.name + " and I'm " + person.age + " years old");
*/


