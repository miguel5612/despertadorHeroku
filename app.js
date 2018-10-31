var http = require("http");
var tiempoMinutos = 19;
var tiempoMilisegundos =  0;
var max = 45;
var min = 20;

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
    return minutes*60*1000;
}
tiempoMilisegundos = getMiliseconds(tiempoMinutos);
console.log("is time: ", isTime());
var despertar = function(){
    tiempoMinutos = Math.floor(Math.random() * (max - min)) + min;
    tiempoMilisegundos = getMiliseconds(tiempoMinutos);
    console.log("tiempo en minutos: ",tiempoMinutos);
    console.log("tiempo en MS:", tiempoMilisegundos);

    if(isTime()){
        http.get("http://on3dmonitor.herokuapp.com");
        console.log("despertando a heroku");
    }
    console.log("el ciclo se ha ejecutado");
    setTimeout(despertar, tiempoMilisegundos);
}
setTimeout(despertar, tiempoMilisegundos);
