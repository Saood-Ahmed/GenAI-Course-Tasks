const animals: string[] = ["Dog", "Horse", "Parrot"];

for (let i: number = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

for (let i: number = 0; i < animals.length; i++) {
    console.log(`A ${animals[i].toLowerCase()} would make a great pet.`);
}

console.log("\nAny of these animals would make a great pet!");
