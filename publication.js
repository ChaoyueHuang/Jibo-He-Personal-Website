var content3 = document.getElementById("refereed-journal");
var button3 = document.getElementById("viewmore-3");

var content4 = document.getElementById("manuscript");
var button4 = document.getElementById("viewmore-4");

var content5 = document.getElementById("refereed-proceedings");
var button5 = document.getElementById("viewmore-5");

var content6 = document.getElementById("conference-abstracts");
var button6 = document.getElementById("viewmore-6");

button3.onclick = function() {

  if (content3.className == "open") {
    content3.className = "";
    button3.innerHTML = "+ view more";
  } else {
    content3.className = "open";
    button3.innerHTML = "- view less";
  }

};

button4.onclick = function() {

  if (content4.className == "open") {
    content4.className = "";
    button4.innerHTML = "+ view more";
  } else {
    content4.className = "open";
    button4.innerHTML = "- view less";
  }

};

button5.onclick = function() {

  if (content5.className == "open") {
    content5.className = "";
    button5.innerHTML = "+ view more";
  } else {
    content5.className = "open";
    button5.innerHTML = "- view less";
  }

};

button6.onclick = function() {

  if (content6.className == "open") {
    content6.className = "";
    button6.innerHTML = "+ view more";
  } else {
    content6.className = "open";
    button6.innerHTML = "- view less";
  }

};
