function robo1(context,x,y,color){
    var context = context;
  
    context.save();              
    
    
    //context.fillStyle=color;
    //context.beginPath();
    //context.fillRect(x,y,window.innerWidth/30,window.innerHeight/15); 
    context.drawImage(professor, x, y,70,90);
    context.restore();

}
function robo2(context,x,y,color){
    var context = context;

    context.save();              
    /*context.fillStyle=color;
    context.beginPath();
    context.fillRect(x,y,window.innerWidth/30,window.innerHeight/15);  */
    context.drawImage(robo, x, y,80,120);
    context.restore();
}

function comida(context,x,y,color){
    var context = context;

    context.save();              
    context.fillStyle=color;
    context.beginPath();
    //context.fillRect(x,y,window.innerWidth/30,window.innerHeight/15);  
    context.drawImage(pilha, x, y,80,80);
    context.restore();
}

