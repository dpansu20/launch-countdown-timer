
var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();


function format(int) {
    if (int >= 0 && int <= 9) {
        var newInt = "0" + int;
        return newInt;
    } else {
        return int;
    }
}


var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.5));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days >= 99) {
        days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.5)) / (1000 * 60 * 60 * 24));

        document.querySelector(".cards .months").style.display = "block";
        document.getElementById("months").innerHTML = format(months);
    } else {
        document.querySelector(".cards .months").style.display = "none";
    }

    document.getElementById("days").innerHTML = format(days);
    document.getElementById("hours").innerHTML = format(hours);
    document.getElementById("minutes").innerHTML = format(minutes);
    document.getElementById("seconds").innerHTML = format(seconds);

    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".launching").innerHTML = "Assignment Launched";
        document.querySelector(".cards").style.display = "none";
      }

}, 1000)