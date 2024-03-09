const show_magicians = (magicians: string []) => {
    for(let i: number = 0; i < magicians.length ; i++) {
        console.log(magicians[i]);
    }
}

const magicians_names = ["Magician1", "Magician2", "Magician3"];

show_magicians(magicians_names);