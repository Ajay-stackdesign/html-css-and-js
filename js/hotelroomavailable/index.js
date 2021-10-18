const hotel = {
    name: "quay",
    rooms : prompt("enter the numbers of room"),
    booked : prompt("enter the number booked"),
    checkAvailability : function (){
        return this.rooms - this.booked;
    }
};

document.getElementById("hotelRoom").innerHTML =hotel.name;
document.getElementById("checkAvialbility").innerHTML = hotel.checkAvailability();