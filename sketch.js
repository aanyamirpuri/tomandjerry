var t,ti,ta
var j,ji,ja
var b,bi
var tf,jf
function preload() {
    //load the images here
    ti=loadImage("images/tomOne.png")
    ji=loadImage("images/jerryOne.png")
    bi=loadImage("images/garden.png")
    ta=loadAnimation("images/tomTwo.png","images/tomThree.png")
    ja=loadAnimation("images/jerryTwo.png","images/jerryThree.png")
    tf=loadAnimation("images/tomFour.png")
    jf=loadAnimation("images/jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   

    t=createSprite(870,600)
    t.addImage(ti)
    t.scale=0.15
    j=createSprite(200,600)
    j.addImage(ji)
    j.scale=0.15
}

function draw() {

    background(bi);
    //Write condition here to evalute if tom and jerry collide
    if(t.x-j.x<(t.width-j.width)/2){
        t.addAnimation("endt",tf)
        t.changeAnimation("endt")
        j.addAnimation("endf",jf)
        j.changeAnimation("endf")
        t.velocityX=0
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    t.velocityX=-5
    t.addAnimation("running",ta)
    t.changeAnimation("running")
    j.addAnimation("teasing",ja)
    j.changeAnimation("teasing")
}

}
