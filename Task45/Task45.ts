function car_information(manufacturer: string, modelName: string, ...extras: [string, any][]): any {
    const car: { [key: string]: any } = {
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
