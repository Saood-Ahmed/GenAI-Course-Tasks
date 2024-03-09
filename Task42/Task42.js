"use strict";
const show_magicians = (magicians) => {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
};
const make_great = (magicians) => {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "Great" + magicians[i];
    }
};
const magicians_names = ["Magician1", "Magician2", "Magician3"];
show_magicians(magicians_names);
make_great(magicians_names);
show_magicians(magicians_names);
