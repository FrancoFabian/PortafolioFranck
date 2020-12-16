var sketchProc = function(processingInstance) {

  with (processingInstance) {
    size(700,500);
    var xPos = 100;
    var yPos = 300;
    var uno = 300;
    var dos =300;
    var currentScene;
    class Button{
      constructor(config){
          this.x = config.x || 0;
          this.y = config.y || 0;
          this.width = config.width || 80;
          this.height = config.height || 50;
          this.label = config.label || "Click";
          this.color = config.color || color(207, 85, 85);
          this.onClick = config.onClick || function() {};
      };
      //draw the button
      draw (str) {
          if(str)
              this.label=str;

          if (this.isMouseInside() && mousePressed) {
              fill(255, 255, 255);
          }
          else {
              fill(this.color);
          }
          rectMode(CENTER);
          rect(this.x, this.y, this.width, this.height, 5);
          fill(0, 0, 0);
          textSize(19);
          textAlign(CENTER, CENTER);
          text(this.label, this.x, this.y);
      };
      //check if mouse cursor is inside the button
      isMouseInside () {
          return mouseX > this.x-this.width/2 &&
                 mouseX < (this.x + this.width/2) &&
                 mouseY > this.y - this.height/2 &&
                 mouseY < (this.y + this.height/2);
      };
      //handle mouse clicks for the button
      handleMouseClick () {
          if (this.isMouseInside()) {
              this.onClick();
          }
      };
  };
     
  var btn1 = new Button({
    x: 350,
    y: 350,
    width: 100,
    height: 30,
    color: color(250,100,250),
    label:"Comenzar",
    onClick: function() {
        //if(currentScene === 1)
        currentScene = 2;
    }
});
    draw = function() {
        background(29, 40, 115);
        currentScene = 2;
        xPos++;
        yPos--;
        fill(255, 242, 0);
        rect(xPos-1, yPos-1, 10, 10);
        uno--;
        dos--;
        ellipse(uno,dos, 10, 10);
         fill(61, 59, 59);
        rect(60,299,200,100000);
        rect(160,190,200,100000);
        fill(0, 0, 0);
        ellipse(60,350,60,60);
        rect(58,300,50,50);
        ellipse(110,290,50,50);
        rect(115,255,30,30);
       
    };
    
  

  }
};

var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc); 