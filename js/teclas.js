window.onkeydown = pressionaTecla;
function pressionaTecla(e) {
	//alert(e.keyCode);
    if (e.keyCode == 80 && inicia == true){
    	pause(context);                      
    }
    if ((e.keyCode == 67 || e.keyCode == 32) && inicia == false){
        start();        
    }                
    //PLAYER 
    if((e.keyCode == 37 || e.keyCode == 65) && xPersonagem>x/4.3 && inicia == true) { 
        xPersonagem -= velocidade; //move para esquerda     
    }
    if((e.keyCode == 39 || e.keyCode == 68) && xPersonagem<x/4.3+x/1.92 && inicia == true) {
        xPersonagem += velocidade; //move para direita
    }
    if((e.keyCode == 38 || e.keyCode == 87)&& yPersonagem>y/6 && inicia == true) {
        yPersonagem -= velocidade; //move para cima
    }
    if((e.keyCode == 40 || e.keyCode == 83) && yPersonagem<y/1.23 && inicia == true) {
        yPersonagem += velocidade; //move para baixo 
    }
}
  