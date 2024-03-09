type myObject = {
    name:string,
    age: number,
    graduated: boolean
}

function createMyObject (name: string, age: number, graduated: boolean) {
    return{
        name: name,
        age: age,
        graduated: graduated
    }
}

const objectA: myObject = createMyObject("Saood", 25, true);

const objectB: myObject = createMyObject("Saad", 25, true);

const objectC: myObject = createMyObject("Ahmed", 20, false);

console.log(objectA);

console.log(objectB);

console.log(objectC);