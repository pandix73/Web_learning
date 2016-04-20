var myGamePiece;
var myBackground;
var myObstacles = [];
var myScore;
var keyInputGap = 0;

function startGame() {
	myGameArea.stop();
	myObstacles = [];
	myGamePiece = new component(80, 80, "ufo.jpg", 10, 0, "image");
    myBackground = new component(640, 330, "background.jpg", 0, 0, "background");
    myScore = new component("30px", "Consolas", "white", 280, 40, "text");
	myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        game = document.getElementById("game-area");
		this.canvas.width = 640;
        this.canvas.height = 330;
        this.context = this.canvas.getContext("2d");
        game.insertBefore(this.canvas, game.childNodes[0]);
		this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
		window.addEventListener('keydown', function (e) {
            e.preventDefault();
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");            
        })
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
			ctx.font = this.width + " " + this.height;
			ctx.fillStyle = color;
			ctx.fillText(this.text, this.x, this.y);
		} else {
			ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
			if (type == "background") {
				ctx.drawImage(this.image, 
					this.x + this.width, 
					this.y,
					this.width, this.height);
			}
		}
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    }
	this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    for (i = 0; i < myObstacles.length; i ++) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            myGameArea.stop();
            return;
        } 
    }
	myGameArea.clear();
    myBackground.speedX = -1;
    myBackground.newPos();    
    myBackground.update();
    
	myGameArea.frameNo += 1;
	var gap = (myGameArea.frameNo > 2500) ? 50 : (myGameArea.frameNo > 1000 ) ? 70 : (myGameArea.frameNo > 500) ? 100 : 130;
	if (myGameArea.frameNo == 1 || everyinterval(gap)) {
        var num = Math.floor(Math.random()*6);
		var place = Math.floor(Math.random()*4);
		if(num < 2){
			myObstacles.push(new component(75, 75, "star.jpg", 640,place*80+1, "image"));
		} else if(num < 5){
			var nextPlace = (Math.floor(Math.random()*3 + 1) + place)%4;
			myObstacles.push(new component(75, 75, "star.jpg", 640,place*80+1, "image"));
			myObstacles.push(new component(75, 75, "star.jpg", 640,nextPlace*80+1, "image"));
		} else if(num == 5){
			myObstacles.push(new component(75, 75, "star.jpg", 640,(place+1)%4*80+1, "image"));
			myObstacles.push(new component(75, 75, "star.jpg", 640,(place+2)%4*80+1, "image"));
			myObstacles.push(new component(75, 75, "star.jpg", 640,(place+3)%4*80+1, "image"));

		}
	}
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x -= (myGameArea.frameNo > 2500) ? 6 : (myGameArea.frameNo > 1000 ) ? 4 : (myGameArea.frameNo > 500) ? 3 : 2;
        myObstacles[i].update();
    }
	myScore.text="SCORE: " + myGameArea.frameNo;
    myScore.update();
	
	keyInputGap ++;
	if(keyInputGap > 5){
		myGamePiece.speedX = 0;
		if (myGameArea.keys && myGameArea.keys[38]) myGamePiece.y -= 80;
		if (myGameArea.keys && myGameArea.keys[40]) myGamePiece.y += 80;
		if (myGameArea.keys && myGameArea.keys[37]) myGamePiece.speedX = -3;
		if (myGameArea.keys && myGameArea.keys[39]) myGamePiece.speedX = 3;
		if (myGamePiece.y > 240)myGamePiece.y = 240;
		if (myGamePiece.y < 0) myGamePiece.y = 0;
		keyInputGap = 0;
	}
	myGamePiece.newPos();    
    myGamePiece.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}