var canvas;
var fixSprite1, fixSprite2, fixSprite3, fixSprite4;
var movingSprite
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);


    movingSprite = createSprite(random(20,750),300, 20,20);
    movingSprite.shapeColor = "white";
    movingSprite.velocityX = 3;
    movingSprite.velocityY = 3;

    fixSprite1= createSprite(100,590,180, 20);
    fixSprite1.shapeColor = "red";

    fixSprite2= createSprite(300,590,180, 20);
    fixSprite2.shapeColor = "green";

    fixSprite3= createSprite(500,590,180, 20);
    fixSprite3.shapeColor = "blue";

    fixSprite4= createSprite(700,590,180, 20);
    fixSprite4.shapeColor = "yellow";

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

if(movingSprite.x<0){
    music.stop();
    movingSprite.velocityX= 3;
}else if(movingSprite.x>800){
    music.stop();
    movingSprite.velocityX= -3; 
}
if(fixSprite1.isTouching(movingSprite)){
    music.play();
    movingSprite.shapeColor = "red";
    movingSprite.bounceOff(fixSprite1);
}

if(fixSprite2.isTouching(movingSprite)){
    music.play();
    movingSprite.shapeColor = "green";
    movingSprite.bounceOff(fixSprite2);
}
if(fixSprite3.isTouching(movingSprite)){
    music.play();
    movingSprite.shapeColor = "blue";
    movingSprite.bounceOff(fixSprite3);
}
if(fixSprite4.isTouching(movingSprite)){
    music.play();
    movingSprite.shapeColor = "yellow";
    movingSprite.bounceOff(fixSprite4);
}
if(movingSprite.y<0){
    music.stop();
    movingSprite.velocityY = 3;
}


drawSprites();
    //add condition to check if box touching surface and make it box
}
