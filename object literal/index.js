const hotel = {
    name: "quay",
    room: prompt("enter the room"),
    booked: prompt("enter the number booked"),
    checkAvailability:function(){
        return this.room -this.booked
    }
}


document.getElementById("name").innerHTML = hotel.name;

//console.log(hotel.checkAvailability())
document.getElementById("avialability").innerHTML = hotel.checkAvailability();