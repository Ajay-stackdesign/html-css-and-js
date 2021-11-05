let nidhi = document.getElementsByTagName("h1")[0];
nidhi.setAttribute("class","walk");



let list = document.getElementsByTagName("ul")[0];

let create = document.createElement("li")
let text = document.createTextNode("fresh nuts");
create.appendChild(text);
list.appendChild(create)

let element = document.createElement("li");
let text1 = document.createTextNode("balsmic vinegar");
element.appendChild(text1);
list.appendChild(element)

let create2 = document.createElement("li");
let text2 = document.createTextNode("fresh pigs")
create2.appendChild(text2);
list.appendChild(create2);

let create3 = document.createElement("li");
let text3 = document.createTextNode("kale");
create3.appendChild(text3)
list.appendChild(create3)

let list1 = document.getElementsByTagName("li")

for (let i=0;i<list1.length;i++){
    list1[i].className = "ramp";
}