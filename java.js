$(function(){
	updateTime();
});


function updateTime() {

	// Get time from moment.js with specified format
	var now = moment().format("hhmmssdA");
	
	// Move the clock hands
	rotateHands(now[4]+now[5],now[2] + now[3],now[0] + now[1]);
	setTimeout(updateTime, 1000);
}

function rotateHands(sec,min,hour) {
  var degSec = 360/60*sec;
	var degMin = 360/60*min;
	var degHour = 360/12*hour;

	var sHand = $('#secondhand');
	sHand.css({
        "-webkit-transform": "rotate(" + degSec + "deg)",
        "-moz-transform": "rotate(" + degSec + "deg)",
        "transform": "rotate(" + degSec + "deg)" 
    });

	var mHand = $('#minutehand');
	mHand.css({
        "-webkit-transform": "rotate(" + degMin + "deg)",
        "-moz-transform": "rotate(" + degMin + "deg)",
        "transform": "rotate(" + degMin + "deg)"
    });

	var hHand = $('#hourhand');
	hHand.css({
        "-webkit-transform": "rotate(" + degHour + "deg)",
        "-moz-transform": "rotate(" + degHour + "deg)",
        "transform": "rotate(" + degHour + "deg)" 
    });
}


