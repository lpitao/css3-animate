var starObj = function(){
	this.x = Math.random()*600 + 100;
	this.y = Math.random()*300 + 150;
	
	this.picNo = Math.floor(Math.random() * 7);
	this.timer = 0;
	
	this.xSpd = Math.random() * 3;
	this.ySpd = Math.random() * 3;
	
}
starObj.prototype.init = function(){
	
	this.draw();
	this.update();
	
}
starObj.prototype.update = function(){
	this.x += this.xSpd * deltaTime * 0.002;
	this.y += this.ySpd * deltaTime * 0.002;
	
	this.timer += deltaTime;
	if(this.timer > 50){
		this.picNo += 1;
		this.picNo %= 7;
		this.timer = 0;
	}
	console.log(deltaTime)
}
starObj.prototype.draw = function(){
	ctx.save();
	ctx.globalAlpha = life;
	ctx.drawImage(starPic,this.picNo * 7,0,700,700, this.x, this.y,700,700);
	ctx.restore();
}

//function drawStar(){
//	for(var i = 1; i < num; i++){
////		stars[i].update();
//		console.log(stars[i])
//		stars[i].draw();
//		
//	}
//}

