// Play video

$("#play-video").click(function() {
  $("#play-video").hide();
  $("#yt")[0].src += "?autoplay=1";
  setTimeout(function() {
    $("#yt").show();
  }, 200);
});


// Show more

var content1 = document.getElementById("experience");
var button1 = document.getElementById("viewmore-1");

var content2 = document.getElementById("funding");
var button2 = document.getElementById("viewmore-2");

button1.onclick = function() {

  if (content1.className == "open") {
    content1.className = "";
    button1.innerHTML = "+ view more";
  } else {
    content1.className = "open";
    button1.innerHTML = "- view less";
  }

};

button2.onclick = function() {

  if (content2.className == "open") {
    content2.className = "";
    button2.innerHTML = "+ view more";
  } else {
    content2.className = "open";
    button2.innerHTML = "- view less";
  }

};
