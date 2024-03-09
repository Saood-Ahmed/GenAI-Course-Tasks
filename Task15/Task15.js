"use strict";
let guests = ["John Doe", "Mr Bean", "Popeye The Sailor Man"];
// guests.forEach(guest => {
//     console.log(`Hi, ${guest} I would like to invite you to dinner at my farmhouse.`);
// });
let unattendingGuest = "John Doe";
let newGuest = "Charlie Chaplin";
let newGuests = guests
    .map(guest => guest !== unattendingGuest ? guest : undefined)
    .filter(guest => guest !== undefined);
newGuests.push(newGuest);
newGuests.forEach(guest => {
    console.log(`Hi, ${guest} I would like to invite you to dinner at my farmhouse.`);
});
