var http = require("http");
//Despertar a heroku


function isTime(){
    var currentHour =calcTime(-5).getHours();
	if(currentHour < 18 && currentHour > 8) return true;
	else return false;
    //your code
}
function calcTime(offset) {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    // return time as a string
    return nd;
}

setInterval(function() {
	if(isTime()) 
	{
		http.get("http://on3dmonitor.herokuapp.com");
		console.log("despertando a heroku");
	}
}, 1800000); // every 0.5 hours (1800000)