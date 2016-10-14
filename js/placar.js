function drawScore(pontoP1,nivel,vidas){
    context.save();
    
    context.fillStyle="#C71585";
    
    function p1(pontoP1){    
        this.pontos = pontoP1;
        context.font=x/25+"px arial";
        context.fillText("Pontuação",x/60,y/9.5);
        context.fillText(this.pontos,x/10,y/4);
    }
    function level(nivel){
        this.nivel = nivel;
        context.font=x/25+"px arial";
        context.fillText("Nível",x/1.18,y/9.5);
        context.fillText(this.nivel,x/1.14,y/4);
    }

 /*   function p2(pontoP2){   
        this.pontos = pontoP2;
        context.font=x/25+"px arial";
        context.fillText("Pontuação P2",x/1.4,y/8);
        context.fillText(this.pontos,x/1.2,y/4);
    }*/
    function drawVidas(vidas){
        var j=4;
        for (var i=0; i<vidas;i++){
            j+=1;
            context.drawImage(vida, window.innerHeight/j, innerHeight/2,80,100);
        }
        context.font=x/26+"px arial";
        context.fillText("Belividas: "+vidas,x/60,y/2);
        
    }
    p1(pontoP1);
    level(nivel);;
    drawVidas(vidas);
    //p2(pontoP2);
    context.restore();
}