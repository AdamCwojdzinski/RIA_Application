// Exercise 1

function sqr(x){
    return (x*x);
}

console.log(sqr(2));
console.log(sqr(4));

var tab = [3, 5, 9];
var tab1 = [4, 6, 7];
var tab2 = [1, 5, 8];
var tab3 = [2, 4, 8];
var sol = [];

for (var i = 0; i < tab.length; i++){
    sol[i] = tab[i] * tab[i];
    console.log(sol[i]);
}

for (let i of tab1){
    console.log(i * i);
}

for (let i in tab2){
    console.log(tab2[i] * tab2[i]);
}

tab3.forEach(function (element){
    console.log(element * element);
})

var solo = tab1.map( x => x*x);
console.log(solo);

// Exercise 2

function init(){
    var bool = true;
    function displayState(bool) {
        return bool != bool;
    }
    displayState();
}

var st = (function (){
    var bool = true;
    return function () {
        return bool = !bool;
    }
})();

console.log(st());
console.log(st());
console.log(st());
console.log(st());
console.log(st());

// Exercise 3

function myF(a) {
    var suma = 0;
    for (var i = 0; i < arguments.length; i++){
        suma = suma + arguments[i];
    }
    return suma;
}

console.log(myF(10, 10, 10, 1, 90, 12, 56));

function myF2(...numbers) {

    return numbers.reduce((sum, elem) => sum + elem);
}

var result = myF2(10, 10, 10, 1, 90, 12, 56);
console.log(result);


function myF3(...numbers) {
    var ValueToMap = numbers.map(numbers => +numbers);
    var NoNumbersFilter = ValueToMap.filter(value => !isNaN(value));
    var SumFilterArray = NoNumbersFilter.reduce((prev, next) => prev + next, 0);
    return SumFilterArray || NaN;
}


console.log(myF3(10, '10', 10, 5, 5, '2'));
console.log(myF3(10, '10', 'c', 5, 5, '2'));
console.log(myF3());