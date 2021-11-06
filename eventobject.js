// const checkUserName = () => {
//     let target = e.target;
// }
// document.getElementById("learning").addEventListener("click",checkUserName,false)

// // event listener with paramter:

// const checkUserName = (e,minilength) => {
//     let target = e.target;

// }
// document.getElementById("learning").addEventListener("blur", () => {
//     checkUserName(e,8);
// },false)
// let elmsg = document.getElementById("feedback")
// const checkLength = (e, minilength) => {
//     if (!e) {
//         e = window.event;
//     }
// }
//     let el = e.target || e.srcElement;
//     let elmsg = el.nextSibling;
// let elmsg = document.getElementById("feedback")
// const checkUserName = (minilength) => {
//     if (user.value.length < minilength) {
//         elmsg.innerHTML = "the value contains mpore than 8"
//     } else {
//         elmsg.innerHTML = "";
//     }
// }


// let user = document.getElementById("username");
// if (user.addEventListener) {
//     user.addEventListener("blur", () => {
//         checkUserName(8)
//     }, false)
// } else {
//     user.attachEvent("onblur", () => {
//         checkUserName(8);
//     });
// }

function checkUserName(e,minilength){
    if(!e){
        e=window.event;
    }
    let el = e.target || e.srcELement;
    elMsg = el.nextSibling;
    
    if(el.value.length < minilength){
        elMsg.innerHTML = `username must be ${minilength} characters or more`;
    }else{
        elMsg.innerHTML = "";
    }
}

let username = document.getElementById("username");
if(username.addEventListener){
    username.addEventListener("blur",function(e){
        checkUserName(e,5)
    })
}else{
    username.attachEvent("onblur",function(e){
        checkUserName(e,8)
    });
}