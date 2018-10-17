var car = {
    type: "Fiat",
    price: 40000,
    power: 90,
    morePower: function (p) {
        var newPower = this.power + p;
        this.power = newPower;
        return newPower;
    }
}

console.log(car.type + " cost zl " + car.price + " have " + car.power + " KM ");
console.log(" ");
console.log(car.type + " cost zl " + car.price + " have " + car.morePower(20) + " KM ");

function Car(type, price, power) {
    this.type = type;
    this.price = price;
    this.power = power;
}

Car.prototype.morePower = function (p) {
    var newPower = this.power + p;
    this.power = newPower;
    return newPower;
}

var car1 = new Car("Audi", 55000, 150);
var car2 = new Car("VW", 45000, 110);
var car3 = new Car("Skoda", 40000, 140);
var obj = [car1, car2, car3];

function showAllCars(obj) {
    for (let i in obj){
        console.log(obj[i].type + " cost " + obj[i].price + " have " + obj[i].power + " KM ");
    };
}
console.log(" ");
showAllCars(obj);
obj[0].morePower(10);
console.log(" ");
showAllCars(obj);
console.log(" ");

console.log(car1.toString()); // nie przysłonięta metoda zwraca [object typ]. W nasz przypadku [object Object]
console.log(car1.valueOf()); // konwertuje obiekt do wartości podstawowej.

Car.prototype.toString = function showCar(){
    var show = "Car { type: " + "'" + this.type + "'" + ", price: " + this.price + ", power: " + this.power;
    return show + " }";
};

var carString = car1.toString();

console.log(carString);

// Exercise 2

function json(obj){
    for (let i in obj){
        myJson = JSON.stringify(obj[i]);
        console.log(myJson);
    }
}

json(obj);

var json2 = JSON.stringify(car);
console.log(json2);

myObj = {
    "type":"BMW",
    "price":55000,
    "power": 200
}

console.log(myObj.toString());
console.log(myObj.valueOf());
console.log((myObj.morePower));