let magicians_copy: string [] = [];

const show_magicians = (magicians: string []) => {
    for(let i: number = 0; i < magicians.length ; i++) {
        console.log(magicians[i]);
    }
}

const make_great = (magicians: string [], copy_array?: string []) => {
    for(let i: number = 0; i < magicians.length ; i++) {
        copy_array?.push("Great" + magicians[i]);
    }
}

const magicians_names = ["Magician1", "Magician2", "Magician3"];

show_magicians(magicians_names);

show_magicians(magicians_copy);

make_great(magicians_names, magicians_copy);

console.log("ORIGINAL ARRAY");
show_magicians(magicians_names);


console.log("COPY ARRAY");
show_magicians(magicians_copy);