function line(x1,y1,x2,y2){
    x1 = +x1;
    y1 = +y1;
    x2 = +x2;
    y2 = +y2;
    
    var canvas = document.getElementById("canvas1");
    var context = canvas.getContext("2d");

    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
    document.getElementById('x1').value = "0";
    document.getElementById('x2').value = "0";
    document.getElementById('y1').value = "0";
    document.getElementById('y2').value = "0";
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

