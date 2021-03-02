let emails = ["user@gmail.com", "user1@gmail.com", "user2@gmail.com", "user3@gmail.com"];
let my_email = document.getElementById("email");

let result = document.getElementById("result");

function checkEmail () {
    result.innerHTML = null;
    let exists = false;

    if (my_email.value != "") {

        for (let i = 0; i < emails.length; i++) {
            if (emails[i] == my_email.value) {
                exists = true;
            }
        }

        if (exists) {
            result.innerHTML = "It exists!"
        }
        else {
            result.innerHTML = "It doesn't exists!";
        }
    }
}