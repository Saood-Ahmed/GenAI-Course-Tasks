const users: string [] = ["Saood", "Ahmed", "Ali", "Saad", "Admin"];

users.forEach(user => {
    if(user == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
});