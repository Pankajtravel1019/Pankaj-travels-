function toggleMenu() {
  document.querySelector("nav").classList.toggle("active");
}

function calculateFare() {
  let km = Number(document.getElementById("km").value);
  let rate = Number(document.getElementById("fareType").value);

  if (!km || km <= 0) {
    document.getElementById("result").innerHTML = "Please enter valid KM";
    return;
  }

  let total = km * rate;
  document.getElementById("result").innerHTML = "Estimated Fare: ₹" + total;
}

function sendWhatsApp(event) {
  event.preventDefault();

  let message =
`*PANKAJ TRAVELS BOOKING*

👤 Name: ${document.getElementById("name").value}
📞 Mobile: ${document.getElementById("mobile").value}
📍 Pickup: ${document.getElementById("pickup").value}
📍 Drop: ${document.getElementById("drop").value}
📅 Date: ${document.getElementById("date").value}
⏰ Time: ${document.getElementById("time").value}
🚖 Trip: ${document.getElementById("trip").value}`;

  window.open(
    "https://wa.me/916206048001?text=" +
      encodeURIComponent(message),
    "_blank"
  );
}

function shareWebsite() {
  if (navigator.share) {
    navigator.share({
      title: "Pankaj Travels",
      text: "Book Tata Magic Online",
      url: window.location.href
    });
  } else {
    alert("Sharing is not supported on this device.");
  }
}
