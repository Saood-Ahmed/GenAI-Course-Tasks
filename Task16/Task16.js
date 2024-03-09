"use strict";
let guests = ["John Doe", "Mr Bean", "Popeye The Sailor Man"];
let unattendingGuest = "John Doe";
let newGuest = "Charlie Chaplin";
let newGuests = [];
newGuests = guests
    .map(guest => guest !== unattendingGuest ? guest : undefined)
    .filter(guest => guest !== undefined);
newGuests.push(newGuest);
console.log("We just found a bigger dinner table!");
let threeNewGuests = ["Atif Aslam", "Ali Zafar", "Shahid Afridi"];
newGuests.unshift(threeNewGuests[0]);
newGuests.push(threeNewGuests[2]);
let guestsLength = newGuests.length;
const index = guestsLength / 2;
newGuests.splice(index, 0, threeNewGuests[1]);
newGuests.forEach(guest => {
    console.log(`Hi, ${guest} I would like to invite you to dinner at my farmhouse.`);
});
