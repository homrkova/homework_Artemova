const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {
  var date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log("Hour: " + hr + " Minute: " + min + " Second " + sec);


  let hrPosition = hr * 360 / 12 + (min * (360 / 60) / 12); // на сколько поворачивается часовая стрелка
  let minPosition = min * 360 / 60 + (sec * (360 / 60) / 60) ; // на сколько поворачивается минутная стрелка
  let secPosition= sec * 360 / 60; // на сколько поворачивается секундная стрелка



  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
  
  if (secPosition >= 5 && secPosition <= 59){
    document.getElementById("time").hidden = false;
  }
  else{
    document.getElementById("time").hidden = true;
  }
}

var interval = setInterval(runTheClock, 1000);
