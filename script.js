// Pankaj Travels Pro

// Pankaj Travels Pro

document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector(".booking-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputs = form.querySelectorAll("input, select");

      const name = inputs[0].value;
      const mobile = inputs[1].value;
      const pickup = inputs[2].value;
      const drop = inputs[3].value;
      const date = inputs[4].value;
      const time = inputs[5].value;
      const trip = inputs[6].value;
      const passengers = inputs[7].value;

const message = `
🧳 *Pankaj Travels Booking*

👤 Name: ${name}
📱 Mobile: ${mobile}
📍 Pickup: ${pickup}
🏁 Drop: ${drop}
📅 Date: ${date}
⏰ Time: ${time}
🚕 Trip: ${trip}
👥 Passengers: ${passengers}
`;
      const url =
"https://wa.me/916206048001?text=" + encodeURIComponent(message);

      window.open(url, "_blank");
    });
  }

});
function calculateFare(){

const km = document.getElementById("km").value;

const rate = document.getElementById("trip").value;

const total = km * rate;

document.getElementById("result").innerHTML =
"Estimated Fare : ₹ " + total;

}
function shareWebsite(){

if(navigator.share){

navigator.share({

title:"Pankaj Travels",

text:"Book Tata Magic 7 Seater",

url:window.location.href

});

}else{

alert("Sharing not supported");

}

}

function toggleMenu(){

document.querySelector("nav").classList.toggle("active");

}
window.onload=function(){

setTimeout(function(){

document.getElementById("loader").style.display="none";

},1200);

}
