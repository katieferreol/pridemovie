// BUTTON
var button = document.getElementById("Button1")
  button.onclick = function() {
    window.location = "Pam.html";
  }

  // BUTTON
  var button = document.getElementById("Button2")
    button.onclick = function() {
      window.location = "Katie.html";
  }

// BUTTON
  var button = document.getElementById("Button3")
  button.onclick = function() {
    window.location = "Sashank.html";
  }

  // BUTTON
    var button = document.getElementById("Button4")
    button.onclick = function() {
      window.location = "Joonha.html";
  }

// CLOCK
var span = document.getElementById("clockbutton");

clockbutton.onclick = function time() {
  var dd = new Date();
  var ss = dd.getSeconds();
  var mm = dd.getMinutes();
  var hh = dd.getHours();
  mm = checkTime(mm);
  ss = checkTime(ss);
  span.textContent = hh + ":" + mm + ":" + ss;
  var tt = setTimeout(time, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
