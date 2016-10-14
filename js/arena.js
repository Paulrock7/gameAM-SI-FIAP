function drawArena(){
    context.save();
    
    x = window.innerWidth;
    y = window.innerHeight-20;
    
    //x/3.8,y/3.8,x/2,y/2;
    context.fillStyle="white"; 
    var raioArena = x/4;
    
    context.beginPath();

    /* Cria a arena circular
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
    */  
    context.fillRect(x/4.53,y/7,x/1.69,y/1.2);

    context.fillStyle="#C71585";
    context.font=x/18+"px arial";
    context.fillText("BELIZARIO'S SCAPE",x/4,y/1.8);
    
    context.restore();
}