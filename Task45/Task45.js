"use strict";
function car_information(manufacturer, modelName, ...extras) {
    const car = {
        manufacturer,
        modelName
    };
    for (const [key, value] of extras) {
        car[key] = value;
    }
    return car;
}
const saoodsCar = car_information("Suzuki", "Mehran", ["color", "black"], ["madeIn", 2024]);
console.log(saoodsCar);
