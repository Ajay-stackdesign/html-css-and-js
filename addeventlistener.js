let pass = document.getElementById("pass");
const checkPassword = (number) => {
    if(element.value.length < number){
        pass.innerHTML = `the value should be more than ${number}`
    }else{
        pass.innerHTML = `ok`
    }
}

let element = document.getElementById("content")
element.addEventListener("click", () => {
        checkPassword(8);
    },false)