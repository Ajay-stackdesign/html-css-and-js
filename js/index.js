const Name = prompt ("enter your name");
const check = "please check  your order";
const customerSign = prompt ( "enter the sign");
const totalTiles =   prompt("enter the number in your name");
const subTotal = totalTiles *5;
const shipping = 0.5 * totalTiles ;
const grandTotal = subTotal + shipping;


document.getElementById("name").innerHTML = "Hello"+" "+ (Name+"!" + check).toUpperCase() ;
document.getElementById("customerSign").innerHTML = "customer sign : " + customerSign ;
document.getElementById("totalTiles").innerHTML =  "totalTiles : " + totalTiles ;
document.getElementById("subTotal").innerHTML = "Subtotal : " + "$" +subTotal ;
document.getElementById("shipping").innerHTML = "shipping : " + "$" + shipping ;
document.getElementById("grandTotal").innerHTML = "GrandTotal : " + "$" + grandTotal;


