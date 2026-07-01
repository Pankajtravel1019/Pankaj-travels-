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

      const message =
`🚖 *Pankaj Travels Booking*

👤 Name: ${name}
📱 Mobile: ${mobile}
📍 Pickup: ${pickup}
🏁 Drop: ${drop}
📅 Date: ${date}
⏰ Time: ${time}
🚕 Trip: ${trip}
👥 Passengers: ${passengers}`;

      const url =
"https://wa.me/916206048001?text=" + encodeURIComponent(message);

      window.open(url, "_blank");
    });
  }

});
