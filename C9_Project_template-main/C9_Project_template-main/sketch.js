//2. Create a variable named brick at the first line of "sketch.js"
var brick 
function setup()
{
 createCanvas(400,400);
 //3. Create a brick sprite by assigning brick variable to createSprite(200,0,100,40)
 brick=createSprite(200,0,100,40)

 brick.shapeColor="brown";
 


 

}

function draw(){

 background("lightblue");
brick.velocityY=1;

 //4.Display the brick sprite by Calling the drawSprites() function inside the draw() function;
 drawSprites()
}

