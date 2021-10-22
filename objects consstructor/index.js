function hotel(name,rooms,booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability=function() {
      return this.rooms -this.booked;
    };
}
let quay = new hotel("quay",110,90);
let parkHotel = new hotel("park",50,13);

console.log(quay.name)

document.getElementById("quay").innerHTML = quay.name + "rooms :" + quay.checkAvailability();
document.getElementById("park").innerHTML = parkHotel.name + "rooms : " + parkHotel.checkAvailability();
