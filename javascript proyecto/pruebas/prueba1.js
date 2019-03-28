// init vars
 
  

// init

/*
function setPixel(x, y) {
  var canvas = document.createElement("canvas1");
  var ctx = canvas.getContext("2d");
  var imageData = ctx.createImageData(1, 1),
  pixelData = imageData.data;
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, maxX, maxY);
  pixelData[0] = 255;
  pixelData[1] = 255;
  pixelData[2] = 255;
  ctx.putImageData(imageData, x, y);
}
*/
function drawLine(x0, y0, x1, y1) {
  var dx = Math.abs(x1 - x0),
    sx = x0 < x1 ? 1 : -1,
    dy = Math.abs(y1 - y0),
    sy = y0 < y1 ? 1 : -1,
    err = dx > dy ? dx : -dy;

  while (x0 != x1 || y0 != y1) {
    console.log(x0,y0);
    circulo(x0, y0);
    var e2 = err;
    if (e2 > -dx * 2) {
      err -= dy;
      x0 += sx;
    }
    if (e2 < dy * 2) {
      err += dx;
      y0 += sy;
    }
  }
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
function circulo(x0,y0){
  var canvas = document.getElementById("canvas1");
  var ctx = canvas.getContext("2d");
  //context.lineTo(x,y);
  //context.setPixel(x,y);
  ctx.beginPath();
  ctx.arc(x0,y0,3, 0, 2 * Math.PI);
  ctx.fillStyle = "red"; // color de las estrellas
  ctx.fill();
  ctx.stroke();
}



