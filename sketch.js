var ball;
var database, pos;
function setup(){
    createCanvas(500,500);
    database = firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPos = database.ref('ball/position')
    ballPos.on("value",readPos)
}

function draw(){
    background("white");
    if(pos !== undefined){
    if(keyDown(LEFT_ARROW)){
        writePos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePos(0,+1);
    }
}
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPos(data){
    pos = data.val()
    ball.x = pos.x
    ball.y = pos.y
}

function writePos(x,y){
    database.ref('ball/position').set({
        x: pos.x + x,
        y: pos.y + y
    })

}