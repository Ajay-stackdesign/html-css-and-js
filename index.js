let today = new Date();
let hourNow = today.getHours()
let greeting;

//timing indicator
if(hourNow > 18 ){
    greeting = "GOOD AFTERNOON!";
}else if (hourNow > 12 ){
    greeting = "GOOD AFTERNOON!";
}else if (hourNow > 0 ) {
    greeting = "GOOD MORNING!";
}else {
    greeting = "WELCOME";
}

document.write("<h3>" + greeting + "</h3>" );