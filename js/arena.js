function drawArena(){
    x = window.innerWidth;
    y = window.innerHeight-20;
    
    var logoCentral = new Image();
    logoCentral
    
    context.fillStyle="white";              

    var raioArena = x/4;
        
    context.beginPath();
    context.fillStyle="white";
    
    context.arc(
        x/2,             //X Centro
        y/2,             //Y Centro
        raioArena,       //Raio 
        90*Math.PI/180, //Início 90 graus
        270*Math.PI/180,//Término 270 graus
        false           //Sentido anti horário
    );
    context.arc(
        x/2,             //X Centro
        y/2,             //Y Centro
        raioArena,       //Raio 
        90*Math.PI/180, //Início 90 graus
        270*Math.PI/180,//Término 270 graus
        true            //Sentido horário
    );
        context.fill();
}