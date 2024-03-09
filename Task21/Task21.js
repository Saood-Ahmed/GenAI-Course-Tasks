function createMyObject(name, age, graduated) {
    return {
        name: name,
        age: age,
        graduated: graduated
    };
}
var objectA = createMyObject("Saood", 25, true);
var objectB = createMyObject("Saad", 25, true);
var objectC = createMyObject("Ahmed", 20, false);
console.log(objectA);
console.log(objectB);
console.log(objectC);
