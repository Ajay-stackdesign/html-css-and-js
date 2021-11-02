const rent = () => {
    const hotel = {
        name:"park",
        price: 240,
        discount: 15,
        offerRate : () =>{
            return `${this.price}*${this.discount}/${100}`
        }
    }
}

let user = rent();
document.getElementById("hotelName").innerHTML = user.hotel.name;