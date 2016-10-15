function telaInicial(){
	drawArena("BELIZARIO'S SCAPE");
	context.fillStyle="#C71585";
	context.font=window.innerWidth/25+"px arial";
	context.fillText("Clique Espaço para iniciar o game",window.innerWidth/5,window.innerHeight/10);
	context.fillStyle="black"; 

	context.font=window.innerWidth/50+"px arial";
	context.fillText("Fuja do Belizário e recolha a maior quantidade de pilhas!",window.innerWidth/4,window.innerHeight/1.2); 
	 

}