var sketchProc = function(processingInstance) {

  with (processingInstance) {
    size(700,500);
    fill(255, 0, 0);
textSize(40);
text("Venta de Mezcal", 210, 80);
textSize(20);
text("A los dolores y al mal de amores  mezcal", 170, 107);
textSize(15);
text("Todo con medida", 300, 130);
fill(237, 232, 100);
rect(157,282,79,85);
fill(0, 115, 115);
rect(157,270,80,15);
fill(33, 122, 33);
ellipse(157,270,30,40);
    
    

  }
};

var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc); 