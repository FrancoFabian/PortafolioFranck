var sketchProc = function(processingInstance) {

  with (processingInstance) {
    size(700,500);
    background(186, 145, 20); // 
    ellipse(350, 260, 350, 350); // plate
    ellipse(350, 260, 300, 300); 
    //pizza
    fill(237, 220, 133);
    triangle(330,100, 480, 390,300,400);
    //peperoni
    fill(255, 111, 0);
    ellipse(350,230,42,42);
    ellipse(340,307,42,42);
    ellipse(410,324,42,42);
    //piña
    fill(255, 242, 0);
    rect(350,171,10,13,8);
    rect(345,270,10,13,8);
    rect(400,296,10,13,8);
    rect(370,209,10,13,8);
    

  }
};

var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc); 