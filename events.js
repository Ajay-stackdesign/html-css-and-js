function checkUserName(){
    let element= document.getElementById("username")
    let feedback = document.getElementById("feedback")
    if(element.value.length < 5){
        feedback.innerHTML = "user mist be greater 5 "
    }else{
        feedback.innerHTML = "";
    }
}
function checkPassword(){
    let password = document.getElementById("password")
    let checkpass = document.getElementById("checkpass");
    if(password.value.length < 6){
        checkpass.innerHTML = "password must be greater than 6";
    }else{
        checkpass.innerHTML = "enter wrong password"
    }
}
