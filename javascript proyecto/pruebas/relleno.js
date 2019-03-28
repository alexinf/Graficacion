var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    dimensions = 512,
    mapSize = 8,
    unitSize = dimensions/mapSize;

canvas.width = canvas.height = dimensions;

// preset data, change mapSize to 8 and call the floodfill method map to use this
var map = [[0,0,0,0,0,0,0,0],
           [0,0,1,1,1,1,1,0],
           [0,0,1,0,0,0,1,0],
           [0,0,1,0,0,0,1,0],
           [0,0,1,0,0,0,1,0],
           [0,0,0,1,0,0,1,0],
           [0,0,0,1,1,1,1,0],
           [0,0,0,0,0,0,0,0]];

function drawMap(mapData){
    for(var x = 0; x < mapSize; x++){
       for(var y = 0; y < mapSize; y++){
           ctx.fillStyle = "rgb(0,200,0)";
           if(mapData[x][y] == 1){
               ctx.fillStyle = "rgb(200,0,0)";        
           }else if(mapData[x][y] >1){
               ctx.fillStyle = "rgb(0,0,200)";      
           }               
           ctx.fillRect(x*unitSize, y*unitSize, unitSize, unitSize ); 
        }  
    }
}
            
function floodFill(mapData, x, y, oldVal, newVal){
    var mapWidth = mapData.length,
        mapHeight = mapData[0].length;
    
        if(oldVal == null){
            oldVal=mapData[x][y];
        }

        if(mapData[x][y] !== oldVal){
            return true;
        }

    mapData[x][y] = newVal;

    if (x > 0){ // left
        floodFill(mapData, x-1, y, oldVal, newVal);
    }
    if(y > 0){ // up
        floodFill(mapData, x, y-1, oldVal, newVal);
    }
    if(x < mapWidth-1){ // right
        floodFill(mapData, x+1, y, oldVal, newVal);
    }
    if(y < mapHeight-1){ // down
        floodFill(mapData, x, y+1, oldVal, newVal);
    }
}

floodFill(map, 3,3,null,2);

drawMap(map);