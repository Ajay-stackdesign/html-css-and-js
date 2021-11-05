let element = document.getElementById("username")
let pass = document.getElementById("feedback")

const checkUserName = (num) => {
    if (element.value.length < num) {
        pass.innerHTML = `value shpuld be more than ${num}`;
    } else {
        pass.innerHTML = `ok`;
    }
}

if(element.addEventListener){
    element.addEventListener("blur",function(){
        checkUserName(5);
    },false);
}else{
    element.attachEvent("onblur",function(){
        checkUserName(5);
    });
}
    

let password = document.getElementById("password")
let checkpass = document.getElementById("checkpass")

const checkPassword = (number) => {
    if(password.value.length < number) {
        checkpass.innerHTML = `the value should be more than ${number}`
    }else{
        checkpass.innerHTML = `ok`
    }
}

if(password.addEventListener){
    password.addEventListener("blur", () => {
        checkPassword(8);
    },false)
}else{
    password.attachEvent("onblur", () => {
        checkPassword(8);
    });
}