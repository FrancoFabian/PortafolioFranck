
var sketchProc = function(processingInstance) {

  with (processingInstance) {
    
    drawAfter(processingInstance,image);
    size(700,500);
   
   
    

  }
};

var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc); 