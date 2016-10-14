function drawScore(pontoP1,pontoP2){
    context.save();
    
    context.fillStyle="#C71585";
    
    function p1(pontoP1){    
        this.pontos = pontoP1;
        context.font=x/25+"px arial";
        context.fillText("Pontuação",x/60,y/9.5);
        context.fillText(this.pontos,x/10,y/4);
    }
 /*   function p2(pontoP2){   
        this.pontos = pontoP2;
        context.font=x/25+"px arial";
        context.fillText("Pontuação P2",x/1.4,y/8);
        context.fillText(this.pontos,x/1.2,y/4);
    }*/
    
    p1(pontoP1);
    //p2(pontoP2);
    context.restore();
}