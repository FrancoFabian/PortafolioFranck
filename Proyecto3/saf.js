var spider;
var bloques;
var ventana;
var cerezo;


var sketchProc = function(processingInstance) {

  with (processingInstance) {
    
    size(700,500);
   
    var bodyX = 196;
    var bodyY = 223;
    var bodyW = 178;
    
    var faceW = bodyW/2;
    
    draw = function() {
        background(107, 54, 55);
        fill(25, 12, 234);
        ellipse(bodyX, bodyY, bodyW, 166); // body?
        ellipse(bodyX+76, bodyY-68, faceW, 46);
        ellipse(bodyX+-70, bodyY-68, faceW, 46);// ears?
        
        fill(10, 204, 10);
        ellipse(bodyX+-39, bodyY-18, faceW-57, 31);
        ellipse(bodyX+40, bodyY-18, faceW-57, 31);
        
        fill(242, 279, 233);
        ellipse(bodyX, bodyY+29, bodyW+-110, 63);
        
        fill(5, 2, 2);
        ellipse(bodyX-10, bodyY+29, faceW-77, 31);
        ellipse(bodyX+12, bodyY+29, faceW-77, 31);
        //ellipse(bodyX+94, bodyY-22, bodyW-89, 21);
        
        
        bodyX = mouseX;
        bodyW = mouseY;
        faceW = bodyW/2;
        
        //rect(x+99,y+228,13,45,20);
        //noStroke();
    };
    

  }
};

var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc); 