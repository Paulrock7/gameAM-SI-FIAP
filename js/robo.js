var tecla=0;
document.addEventListener('keydown', pegaTecla);
 
function pegaTecla(){
    tecla = event.keyCode;
    //alert(tecla);
}

function robo1(context,x,y,color){
    var context = context;
    this.x = x;
    this.y = y;  
    

    if (tecla==87) {
    	this.y -=20;
    }
    if (tecla==83){
    	this.y +=20;
    }


    context.save();              
    context.fillStyle=color;
    context.beginPath();
    context.fillRect(this.x,this.y,window.innerWidth/30,window.innerHeight/15);  
    context.restore();

}
function robo2(context,x,y,color){
    var context = context;
    this.x = x;
    this.y = y;  
    
    context.save();              
    context.fillStyle=color;
    context.beginPath();
    context.fillRect(this.x,this.y,window.innerWidth/30,window.innerHeight/15);  
    context.restore();
}
