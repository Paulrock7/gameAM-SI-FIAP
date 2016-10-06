function drawArena(){
    context.save();
    
    x = window.innerWidth;
    y = window.innerHeight-20;
    
    //x/3.8,y/3.8,x/2,y/2;
    context.fillStyle="white"; 
    var raioArena = x/4;
    
    context.beginPath();
        
    context.arc(
        x/2,             //X Centro
        y/2,             //Y Centro
        raioArena,       //Raio 
        90*Math.PI/180,  //Início 90 graus
        270*Math.PI/180, //Término 270 graus
        false            //Sentido anti horário
    );
    context.arc(
        x/2,             //X Centro
        y/2,             //Y Centro
        raioArena,       //Raio 
        90*Math.PI/180,  //Início 90 graus
        270*Math.PI/180, //Término 270 graus
        true              //Sentido horário
    );
        context.fill();
    
    context.fillStyle="#C71585";
    context.font=x/15+"px arial";
    context.fillText("ROBO CUP",x/3.1,y/1.8);
    
    context.restore();
}