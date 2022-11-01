$(document).ready(function () {
  start();
});


function draw(canvas , currentStartAngle, currentEndAngle) { 
    var x, y, currentColor = '#0d1631 ', lineRadius = 35, lineWidth = 5;

    x = canvas.width / 2;
    y = canvas.height / 2;
  
    var arc = canvas.getContext("2d");
    arc.beginPath();
    arc.arc(x, y, lineRadius, 0, 2 * Math.PI);
    arc.lineWidth = lineWidth;
    arc.strokeStyle = '#314faa91  ';
    arc.stroke();
  
    var context = canvas.getContext("2d");
    context.beginPath();
    var lingrad = context.createLinearGradient(50, 50, 150, 150);
    lingrad.addColorStop(0, '#0196fe');
    lingrad.addColorStop(0.25, '#0196fe');
    lingrad.addColorStop(0.5, '#0196fe');
    lingrad.addColorStop(0.75, '#0d1631 ');
    lingrad.addColorStop(1, '#0d1631 ');
    
    context.arc(x, y, lineRadius, currentStartAngle, currentEndAngle);
    context.lineWidth = lineWidth;
    context.strokeStyle = lingrad;
    context.stroke();
}

function start(){
  
    var target_date = new Date("aug 31, 2022").getTime();
    var days, hours, minutes, seconds;
    var countdown = document.getElementById("countdown");

    setInterval(function () {

        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);
      
        $('#days .value').html(days + " días");
        draw($("#days").find("canvas")[0], 0 , (313/365) * 2 * Math.PI );

        $('#hours .value').html(hours + " horas");
        draw($("#hours").find("canvas")[0], 0 , (hours/12)  * 2 * Math.PI);
      
      
        $('#mins .value').html(minutes + " min");
        draw($("#mins").find("canvas")[0], 0 , (minutes/60)  * 2 * Math.PI);
        
        $('#secs .value').html(seconds + " seg");
        draw($("#secs").find("canvas")[0], 0 , (seconds/60) * 2 * Math.PI );

    }, 500);
}