const secondsHand = document.querySelector(".second-hand");
const minutesdHand = document.querySelector(".minute-hand");
const hoursHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsAsDegrees = (seconds / 60) * 360 + 90;

  const minutes = now.getMinutes();
  const minutesAsDegrees = (minutes / 60) * 360 + 90;

  const hours = now.getHours();
  const hoursAsDegrees = (hours / 12) * 360 + 90;

  secondsHand.style.transform = `rotate(${secondsAsDegrees}deg)`;
  minutesdHand.style.transform = `rotate(${minutesAsDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursAsDegrees}deg)`;
}

setInterval(setDate, 1000);
