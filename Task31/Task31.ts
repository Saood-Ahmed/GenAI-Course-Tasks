const users: string [] = ["Saood", "Ahmed", "Ali", "Saad", "Admin"];

function checkArray(myArray: string []) {
    if(myArray.length === 0) {
        console.log("We need to find some users!");
    } else {
        myArray.splice(0);
        console.log("We need to find some users!");
    }
}

checkArray(users);