function toggleMenu() {
    document.querySelector("nav").classList.toggle("active");
}

function calculateFare() {
    let km = document.getElementById("km").value;
    let rate = document.getElementById("fareType").value;

    if (km === "" || km <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid KM";
        return;
    }

    let total = km * rate;

    document.getElementById("result").innerHTML =
        "Estimated Fare : ₹" + total;
}

function sendWhatsApp(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let pickup = document.getElementById("pickup").value;
    let drop = document.getElementById("drop").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let trip = document.getElementById("trip").value;

    let message =
`*PANKAJ TRAVELS BOOKING*

👤 Name: ${name}
📞 Mobile: ${mobile}
📍 Pickup: ${pickup}
📍 Drop: ${drop}
📅 Date: ${date}
⏰ Time: ${time}
🚖 Trip: ${trip}`;

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
        alert("Share option is not supported on this device.");
    }
          }
