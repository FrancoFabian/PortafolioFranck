var spider;
function drawAfter(pro, callback){
 
  spider = pro.loadImage("./img/gota-morado.png");
  setTimeout(() => {
      callback(spider, 220, 70, 40, 40)
  }, 500);
}
var sketchProc = function(processingInstance) {

  with (processingInstance) {
    drawAfter(processingInstance, image);
    size(700,500);
    var posx=[100,150,200];
    var posy=[0,50,150];
    
   
        for(var x=0; x < 50;x++){
          posx.push(random(1,680));
          posy.push(random(1,479));
         
        }
    
    draw = function() {
        background(204, 247, 255);
        
    
        for (var i = 0; i < posx.length; i++) {
            noStroke();
           
            fill(0, 200, 255);
            ellipse(posx[i]+30,posy[i]+94, 10, 20);
            posy[i] +=10;
           
             fill(255, 255, 0);
             ellipse(posx[i]+50,posy[i]+94, 10, 20);
             fill(222, 22, 55);
             ellipse(posx[i]+80,posy[i]+104, 10, 20);
             image(spider,posx[i],posy[i],50,54);
              if(posy[ i ] >450){
                  posy[ i ] = 0;
              }
             
             
        }
           var nubex=200;
           var nubey=40;
           fill(169, 179, 163);
           ellipse(nubex+250,nubey,650,120);
           ellipse(250,nubey,300,275);
           ellipse(nubex-90,nubey,300,123);
        
    };
         mouseClicked =function(){
             posx.push(mouseX);
             posy.push(mouseY);
         }
    ;
    
    

  }
};

var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc); 