
function talk() {
  var mouth = document.getElementById("mouth");
  mouth.style.animation = "mouthMove 1s ease 7";
  var teeth = document.getElementById("teeth");
  teeth.style.animation = "teethMove 1s ease 7";
  var tongue = document.getElementById("tongue");
  tongue.style.animation = "tongue 1s ease 7";
}

function eyeBlink() {
  var reye = document.getElementById("reye");
  reye.style.animation = "eyeBlink 0.4s 7s 4";
  var leye = document.getElementById("leye");
  leye.style.animation = "eyeBlink 0.4s 7s 4";
}



/*document.getElementById("body").addEventListener("click", function talking() {
  talk();
  eyeBlink();
})



function talking() {
  var talking = document.getElementById("body");
  talk();
  eyeBlink();
  eyeBlink();
}


/*talking.addEventListener("reset", talking());
*/

const body = document.querySelector(".body");

function talking() {
  talk();
  eyeBlink();
}


body.addEventListener("click", talking); 
body.style.property = "initial"; 

function handMove() {
  var hand = document.getElementById("hand");
  hand.style.animation = "handShake 1s ease 4";
}