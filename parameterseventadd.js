let feedback = document.getElementById("feedback");
let username = document.getElementById("username")

function checkUsername(miniLength){
    if (username.value.length < miniLength){
        feedback.innerHTML = "the value should be more than 8"
    }else{
        feedback.innerHTML = " "
    }
}

username.addEventListener("blur", () => {
    checkUsername(8);
},false)

let checkpass = document.getElementById("checkpass");
let password = document.getElementById("password")

function checkPassword(minipass) {
    if (password.value.length < minipass) {
        checkpass.innerHTML = "passowrd contains 8 letter";
    } else {
        checkpass.innerHTML = " ";
    }
}

password.addEventListener("blur", () => {
    checkPassword(8);
}, false);