var sketchProc = function(processingInstance) {

  with (processingInstance) {
    
    
    size(700,500);
   
    
    background(219, 169, 116);
var book = [
    {
      title: "Darkness",
      stars: 3,
      pag:"pág"+31
    },
    {
        title: "Te vas",
        stars: 4,
        pag:"pág"+56
    },
    {
        title: "Otros colores",
        stars: 1,
        pag:"pág"+34
    }
    
];

var book2=[
    {
         title: "Aun te amo",
        stars: 5,
        pag:"pág"+43
    },
    {
         title: "Con la brisa incierta",
        stars: 4,
        pag:"pág"+45
    },
    { title: "Sin soltarte dejarte ir",
       stars: 5,
       pag:"pág"+80
        
    }
      ];
      var book3=[
    {
         title: "El castigo de extrañarte",
        stars: 2,
        pag:"pág"+60
    },
    {
         title: "Sufrir",
        stars: 3,
        pag:"pág"+70
    },
    { title: "Para Morir",
       stars: 5,
       pag:"pág"+50
        
    }
      ];

// draw shelf


for(var j = 0,k = 1; j < book.length ; j++ , k++ ){
       fill(173, 117, 33);
       rect(0, 120*k, width, 10);
       fill(214, 255*j, 219);
       rect(150+j*130, 20, 90, 100);
       fill(0, 0, 0);
       fill(214, 255 * j, 219);
       rect(150+j*130, 138, 90, 100);
       fill(0, 0, 0);
       fill(214, 255*j, 219);
       rect(150+j*130, 257, 90, 100);
       fill(0, 0, 0);
     
       text(book[j].title, 170 + j * 130, 29, 70, 100);
       text(book2[j].title, 170 + j * 130, 168, 70, 100);
       text(book3[j].title, 170 + j * 130, 275, 70, 100);
       text(book[j].pag, 170 + j * 130, 60, 70, 100);
       text(book2[j].pag, 170 + j * 130, 200, 70, 100);
       text(book3[j].pag, 170 + j *130, 326, 70, 100);
       
       
   



  }
}
};

var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc); 