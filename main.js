var canvas = new fabric.Canvas("myCnavas");

player_x = 10;
player_y = 10;

block_width = 40;
block_height = 40;

var player_object = "";
var block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
    
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    
        });
}
function block_update(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_object = Img;
    
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_object);
    
        });
}

window.addEventListener("keydown", myKeydown);
function myKeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        up();
        console.log("up");
    }
    if(keyPressed=="40"){
        down();
        console.log("down");

    }
    if(keyPressed=="37"){
        left();
        console.log("left");

    }
    if(keyPressed=="39"){
        right();
        console.log("right")
    }
    if(keyPressed=="84"){
        block_update("trunk.jpg");
        console.log("T");
    }
    if(keyPressed=="68"){
        block_update("dark_green.png");
        console.log("D");
    }
    if(keyPressed=="76"){
        block_update("light_green.png");
        console.log("L");
    }
    if(keyPressed=="86"){
        block_update("wall.jpg");
        console.log("W");
    }
    if(keyPressed=="71"){
        block_update("ground.png");
        console.log("G");
    }
    if(keyPressed=="89"){
        block_update("yellow_wall.png");
        console.log("Y");
    }
    if(keyPressed=="85"){
        block_update("unique.png");
        console.log("U");
    }
    if(keyPressed=="82"){
        block_update("roof.jpg");
        console.log("R");
    }
    if(keyPressed=="67"){
        block_update("cloud.jpg");
        console.log("C");
    }
    if(e.shiftKey ==true && keyPressed=="80"){
        console.log("shift P pressed together");
        block_width = block_width +10;
        block_height = block_height +10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(e.shiftKey ==true && keyPressed=="77"){
        console.log("shift P pressed together");
        block_width = block_width -10;
        block_height = block_height -10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
}

function up(){
    if (player_y>0){
        player_y = player_y - block_height;
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if (player_y<560){
        player_y = player_y + block_height;
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if (player_x>0){
        player_x = player_x - block_width;
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if (player_x<950){
        player_x = player_x - block_width;
        canvas.remove(player_object);
        player_update();
    }
}