import { toASCII } from "punycode";

const current_users: string [] = ["SAOOD", "AHMED", "Ali", "Saad", "Raza"];

const new_users: string [] = ["Saood", "Ahmed", "Jawad", "Zia", "Naveed"];

function checkArray(currentUsers: string[], newUsers: string[]) {
    for (let i = 0; i < newUsers.length; i++) {
        let isNewUsernameAvailable = true;
        for (let j = 0; j < currentUsers.length; j++) {
            if (newUsers[i].toLowerCase() === currentUsers[j].toLowerCase()) {
                console.log(`${newUsers[i]} will need a new username!`);
                isNewUsernameAvailable = false;
                break; // break if match is found
            }
        }
        if (isNewUsernameAvailable) {
            console.log(`${newUsers[i]} username is available!`);
        }
    }
}
checkArray(current_users, new_users);