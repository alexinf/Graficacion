
var coord = [0,0,0,0];
var cont = 0;
function ponerCeroCont(){
    document.getElementById('x0').value = "0";
    document.getElementById('x1').value = "0";
    document.getElementById('y0').value = "0";
    document.getElementById('y1').value = "0";
    document.getElementById('radio').value = "0";
}
function dibujarPixel(x,y,color){
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");
    //context.lineTo(x,y);
    //context.setPixel(x,y);
    ctx.beginPath();
    ctx.arc(x,y,4, 0, 2* Math.PI);
    ctx.fillStyle = color; 
    ctx.fill();
    ctx.stroke();
}

function clearcanvas(){
	//elimina todo lo del canvas --->
    //contexto.clearRect(400 , 400, 200, 200);
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.strokeStyle = "#f212aa";
    //ctx.stroke();
}
//algoritmo Bresenham
function line(x00,y00,x11,y11){
    var x, y, dx, dy, p, sigX, sigY;
    var x0=parseInt(coord[2],10),
        y0=parseInt(coord[3],10),
        x1=parseInt(coord[0],10),
        y1=parseInt(coord[1],10);

    dx = (x1 - x0);
    dy = (y1 - y0);
    if (dy < 0) { 
	    dy = -dy; 
		sigY = -1; 
	} 
	else{
	  	sigY = 1;
    }
    if (dx < 0) {  
	    dx = -dx; 
		sigX = -1; 
	  } 
	  else {
	  	sigX = 1;
	  } 
	  x = x0;
      y = y0;
      console.log(typeof x);
      console.log(typeof y);
      console.log(typeof x0);
      console.log(typeof y0);
	/* se cicla hasta llegar al extremo de la línea */
	if(dx>dy){
	    p = 2*dy - dx;
	    while (x != x1){
              
              console.log(x," - x  ", x1);
		      x = x + sigX;
		      if (p < 0){
		        p = p + (2*dy);
		      }
		      else {
		        y = y + sigY;
		        p = p + (2*(dy-dx));
		      }
              //console.log(x," - ",y)
              dibujarPixel(x,y);
              //ctx.beginPath();
              //ctx.arc(x,y,3, 0, 2 * Math.PI);
              //ctx.fillStyle = "red"; // color de las estrellas
              //ctx.fill();
//              ctx.stroke();
               // ctx.putImageData(imageData, x, y);
	    }
	}
	else{
	    p = 2*dx - dy;
	    while (y != y1){
              y = y + sigY;
              console.log(y," - y ", y1);
		      if (p < 0){
		        p = p + 2*dy;
		      }
		      else {
		        x = x + sigX;
		        p = p + 2*(dy-dx);
              }
              //console.log(x," - ",y)
              dibujarPixel(x,y,"#87CEFA");	    	 
              //ctx.beginPath();
              //ctx.arc(x,y,3, 0, 2 * Math.PI);
              //ctx.fillStyle = "red"; // color de las estrellas
              //ctx.fill();
              //ctx.stroke();
              //ctx.putImageData(imageData, x, y);
	    }
    }
    //ponerCeroCont();
}
//agoritmo Bresenham
function dibujarCirculoBresenham(r,xc,yc) {
    // Punto inicial del círculo
    var color = "#7A60E7";
    x = 0;
    y = parseInt(r);
    // Cálcular el parámetro inicial de decisión
    var pk = 1-r;
    // verificar el pk para determinar las posiciones de pixel siguuiente
    while (x<=y)
    {
        dibujarPixel( xc+x,yc+y,color);            
        dibujarPixel( xc-x,yc+y,color); 
        dibujarPixel( xc+x,yc-y,color);            
        dibujarPixel( xc-x,yc-y,color); 			
        dibujarPixel( yc+y,xc+x,color);            
        dibujarPixel( yc-y,xc+x,color);    
        dibujarPixel( yc+y,xc-x,color);            
        dibujarPixel( yc-y,xc-x,color);            
        if (pk<0){
            pk+=2*(x+1)+1;
            x++;
        }
        else // pk>=0
        {
            pk+=2*(x+1)+1 - 2*(y-1);
            x++;
            y--;
        }
    }   
    //ponerCeroCont();
}
//algoritmo de DD
function DDA(/*x00,y00,x11,y11)*/)
{   cont = 0;
    mouseClik();
    /*var x1=parseInt(x00,10),
        y1=parseInt(y00,10), 
        x2=parseInt(x11,10),
        y2=parseInt(y11,10);*/
    var x1 = parseInt(coord[0],10),
        y1 = parseInt(coord[1],10),
        x2 = parseInt(coord[2],10),
        y2 = parseInt(coord[3],10);
    var ax,ay,x,y,res;
    var i = 0;
    if(Math.abs(x2-x1)>=Math.abs(y2-y1)){
        //si la variacion en x es mayor o igual que la variacion en y
        res=Math.abs(x2-x1);
    }
    else{
        //si la variacion en y es mayor que la variacion en x
        res=Math.abs(y2-y1);
    }
    ax=(x2-x1)/res;//el valor a aumentar en x
    ay=(y2-y1)/res;//el valor a aumentar en 
    //se realiza casteo a float porque los resultados de la división es un real
    x=parseFloat(x1);
    y=parseFloat(y1);
    while(i<=res)
    {
        dibujarPixel(x,y,"red");
        x=x+ax;
        y=y+ay;
        i++;
    }    
    //ponerCeroCont();

}
function rotar(eje){
    
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");
    ctx.rotate(parseInt(eje) * Math.PI / 180);
    ctx.fillRect(100, 100, 100, 100);
}

function rotar_1(eje){
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");
    ctx.translate(100,100);
    ctx.rotate(Math.PI/parseInt(eje));
    ctx.fillStyle = 'hsl(36,100%,50%)';
    ctx.fillRect(0,0,200,200);
}
function figuras(){
    var canvas = document.getElementById("canvas1");
    var ctx = canvas1.getContext('2d');
    ctx.beginPath();
    //ctx.arc(175, 175, 80, 0, Math.PI*2, true);
    //ctx.moveTo(375, 235);
    ctx.arc(200, 200, 100, 0, Math.PI*2, true);
    ctx.moveTo(400, 105);
    //ctx.arc(20, 55, 40, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.stroke();
    //ctx.strokeRect(20, 50, 150, 70);
    ctx.strokeRect(125, 125, 250, 250);
   // ctx.strokeRect(390, 20, 90, 370);
    ctx.strokeRect(60, 300, 390, 50);
    // Triángulo contorneado
    ctx.beginPath();
    ctx.moveTo(125,125);
    ctx.lineTo(125,45);
    ctx.lineTo(45,125);
    ctx.closePath();
    ctx.stroke();
}
/*window.onmousemove = function (){
    var x = window.event.clientX;
    var y = window.event.clientY;
    const array = {'x': x, 'y': y}
    console.log(array);
}*/
function dibujar() {
    cont = 0;
    coord = [0,0,0,0];
    //stopMouse();
    mouseClik();
    console.log(cont + ' ' + coord);
}

function mouseClik() {
    var ctx = document.getElementById('canvas1').getContext('2d');
    ctx.canvas.addEventListener('mousedown',function(event){
        var mouseX = event.clientX - ctx.canvas.offsetLeft;
        var mouseY = event.clientY - ctx.canvas.offsetTop;
        //var status = document.getElementById('status');
        //console.log('x :' +mouseX + ' y : ' + mouseY);
        if(cont == 0){
            coord [0] = mouseX;
            coord [1] = mouseY;
            cont +=1;
        }
        if(coord[0] == coord[2]){
            coord [2] = mouseX;
            coord [3] = mouseY;
            cont = 0
        }
        if (coord[2] == 0) {
            coord [2] = mouseX;
            coord [3] = mouseY;
            cont = 0
        }

        console.log(coord);
        //console.log(x);
    });
}
