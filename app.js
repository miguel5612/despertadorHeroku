var http = require("http");
var tiempoMinutos = 20;

//Despertar a heroku


var isTime = function (){
    var currentHour =calcTime(-5).getHours();
	if(currentHour < 18 && currentHour > 8) return true;
	else return false;
    //your code
}
var calcTime = function (offset) {
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
var getMiliseconds = function(minutes){
    return minutes*3600*1000;
}

var despertar = function(){
    tiempoMinutos = Math.random(20,45);
    console.log("tiempo en minutos: ",tiempoMinutos);
    if(isTime){
        http.get("http://on3dmonitor.herokuapp.com");
        console.log("despertando a heroku");
    }
    console.log("el ciclo se ha ejecutado");
    setTimeout(despertar, getMiliseconds(tiempoMinutos));
}
setTimeout(despertar, getMiliseconds(tiempoMinutos));