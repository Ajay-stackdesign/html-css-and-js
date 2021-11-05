function checkUsername(){
    let element = document.getElementById("feeedback")
    if(this.value.length < 10){
        element.innerHTML = "the value should be more thaan 5"
    }else{
        element.innerHTML = "error"
    }
}
let username = document.getElementById("username");
username.addEventListener("blur",checkUsername,false)

const checkPassword = (() => { 
    let checkpass = document.getElementById("checkpass")
    if(this.value.length < 8){
        checkpass.innerHTML = "the value should be more than 5";
    }else{
        checkpass.innerHTML = "error";
    }
})
let password = document.getElementById("password");
password.addEventListener("blur",checkPassword,false)
