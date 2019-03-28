function activar(){
    (function() {
        var ctx = c.getContext('2d');
        
        // Stroke some overlapping shapes to create plenty of fill areas
        ctx.beginPath();
        ctx.arc(175, 175, 80, 0, Math.PI*2, true);
        ctx.moveTo(375, 235);
        ctx.arc(275, 235, 100, 0, Math.PI*2, true);
        ctx.moveTo(495, 105);
        ctx.arc(415, 105, 80, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.stroke();
        ctx.strokeRect(20, 50, 150, 70);
        ctx.strokeRect(200, 150, 350, 70);
        ctx.strokeRect(420, 20, 90, 370);
        ctx.strokeRect(60, 300, 490, 50);

        ColourSwatch(Bucket(c), [
            '#800000', 
            '#ff0000', 
            '#ff8000', 
            '#ffff00', 
            '#80ff00', 
            '#00ff80', 
            '#00ffff', 
            '#0080ff', 
            '#8000ff', 
            '#ff00ff', 
            '#ff0080', 
            '#800080', 
            '#000080', 
            '#0000ff', 
            '#000000', 
            '#808080', 
            '#ffffff'
        ], document.body);
    })();
}
