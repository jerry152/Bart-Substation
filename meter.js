var meterWidth = 200;
var meterHeight = 100;

var meter = document.getElementById('Meter');

var ctx2 = meter.getContext('2d');


//meter1
var character8 = new Image();character8.src = "sprites/meter1.jpg";
//meter2
var character9 = new Image();character9.src = "sprites/meter2.jpg";
//meter3
var character10 = new Image();character10.src = "sprites/meter1.jpg";


setTimeout(function (){
ctx2.drawImage(character8,0,0, character8.naturalWidth, character8.naturalHeight, 60, 0, 125, 70); 
ctx2.drawImage(character9,0,0, character9.naturalWidth, character9.naturalHeight, 310, 0, 125, 70); 
ctx2.drawImage(character10,0,0, character10.naturalWidth, character10.naturalHeight, 560, 0, 125, 70);
},700);