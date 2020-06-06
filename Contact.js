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

var submit = document.getElementById("submit");
 submit.onclick = function myFunction() {
  alert("For assignment purposes only. Sorry!");
}
