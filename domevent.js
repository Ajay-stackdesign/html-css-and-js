// function checkUsername() {
//     let element = document.getElementById("username");
//     let feedback = document.getElementById("feedback");
//     if (element.value.length < 7) {
//         feedback.innerHTML = "the value should be more than 5"
//     } else {
//         feedback.innerHTML = "error";
//     }
// }

// function checkPassword(){
//     let element = document.getElementById("password")
//     let checkpass = document.getElementById("checkpass")
//     if(element.value.length < 10){
//         checkpass.innerHTML = "value should be more than 5";
//     }else{
//         checkpass.innerHTML = "error"
//     }
//}

function checkUserName(){
    let element = document.getElementById("feedback")
    if(this.value.length < 5){
        element.innerHTML = "the value should be more than 5"
    }else{
        element.innerHTML = "ok"
    }
}

let username = document.getElementById("username");
username.onblur = checkUserName;

function checkPassword(){
    let checkpass = document.getElementById("checkpass")
    if(this.value.length  < 5 ){
        checkpass.innerHTML = "the element should be more than 5"
        console.log("hello")
    }else{
        checkpass.innerHTML = "error"
    }
}
let password = document.getElementById("password")
password.onblur = checkPassword;