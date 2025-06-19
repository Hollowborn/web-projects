// Analog Clock Elements
const hourHand = document.querySelector("#hour-hand");
const minHand = document.querySelector("#min-hand");
const secHand = document.querySelector("#sec-hand");
// Digital Clock Elemets
const hourDig = document.getElementById("hour-time");
const minDig = document.getElementById("min-time");
const secDig = document.getElementById("sec-time");

const meridiem = document.getElementById("meridiem");
function updateClock() {
  let time = new Date();

  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  // Set the Digital Clock
  hourDig.textContent = hour;

  if (min < 10) {
    minDig.textContent = "0" + min;
  } else {
    minDig.textContent = min;
  }

  //   if (sec < 10) {
  //     sec.textContent = "0" + sec;
  //   } else {
  secDig.textContent = sec;
  //   }
  if (hour >= 12) {
    meridiem.textContent = " " + "PM";
  } else {
    meridiem.textContent = " " + "AM";
  }

  const hrDeg = ((hour % 12) / 12) * 360 + (min / 60) * 30;
  const minDeg = (min / 60) * 360 + (sec / 60) * 6;
  const secDeg = (sec / 60) * 360;
  // Set the Analog Clock
  hourHand.style.transform = `translate(-50%, -100%) rotate(${hrDeg}deg)`;
  minHand.style.transform = `translate(-50%, -100%) rotate(${minDeg}deg)`;
  secHand.style.transform = `translate(-50%, -100%) rotate(${secDeg}deg)`;
}

setInterval(updateClock, 1000);
