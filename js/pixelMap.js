function pixelMap(saltoDePixel){
    var saltoDePixel = saltoDePixel;
    var x=0,y=0;  
    context.beginPath();
    context.strokeStyle="red";
    context.fillStyle="white";              

    context.fillText("X",20,10);
    context.fillText("Y",0,25);
    
    for (var i=0;i<innerWidth;i+=10){  

        x+=saltoDePixel;
        y+=saltoDePixel;
                
        context.moveTo(x,0);
        context.fillText(x+" px",x+2,10);
        context.lineTo(x,window.innerHeight);
        context.stroke();
                
        context.moveTo(0,y);
        context.fillText(y+" px",0,y-2);
        context.lineTo(window.innerWidth,y);
        context.stroke();
    }
}