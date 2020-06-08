var wrong = document.getElementById("wrong1");
wrong.onclick = function wrong() {
    alert("Wrong. Sorry!");
  }

var wrong = document.getElementById("wrong2");
wrong.onclick = function wrong() {
    alert("Wrong. Sorry!");
  }

  var wrong = document.getElementById("wrong3");
  wrong.onclick = function wrong() {
      alert("Wrong. Sorry!");
    }

var correct = document.getElementById("correct");
correct.onclick = function correct() {
    alert("Correct!");
  }

// Got from this site: http://jsfiddle.net/mplungjan/mQrJn/
var span = document.getElementById("clockbutton");
  var clockID;
  var yourTimeZoneFrom = +9.00;

  var d = new Date();
  var tzDifference = yourTimeZoneFrom * 60 + d.getTimezoneOffset();
  var offset = tzDifference * 60 * 1000;

  function UpdateClock() {
      var tDate = new Date(new Date().getTime()+offset);
      var in_hours = tDate.getHours()
      var in_minutes=tDate.getMinutes();
      var in_seconds= tDate.getSeconds();

      if(in_minutes < 10)
          in_minutes = '0'+in_minutes;
      if(in_seconds<10)
          in_seconds = '0'+in_seconds;
      if(in_hours<10)
          in_hours = '0'+in_hours;

     span.textContent = ""
                     + in_hours + ":"
                     + in_minutes + ":"
                     + in_seconds;

  }
  function StartClock() {
     clockID = setInterval(UpdateClock, 500);
  }

  function KillClock() {
    clearTimeout(clockID);
  }

  span.onclick=function() {
    StartClock();
  }
