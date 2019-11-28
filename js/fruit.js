var fruitObj = function(){
	this.alive = [];
	this.orange = new Image();
	this.blue = new Image();
	this.x = [];
	this.y = [];
	this.l = [];
	this.spd = [];
	this.fruitType = []
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
	for(var i = 0; i < this.num; i++){
		this.alive[i] = true;
		this.x[i] = 0;
		this.y[i] = 0;
		this.spd[i] = Math.random() * 0.005 + 0.005;
		this.l[i] = 0;
		this.born(i);
		this.fruitType[i] = "";
	}
	this.orange.src = 'src/fruit1.png';
	this.blue.src = 'src/fruit2.png';
}
fruitObj.prototype.draw = function(){
	for(var i = 0; i < this.num; i++){
		if(this.alive[i]){
			if(this.fruitType[i] == "blue"){
				var pic = this.blue;
			}
			else{
				var pic = this.orange
			}
			if(this.alive[i]){
				if(this.l[i] <= 10){
					this.l[i] += this.spd[i] * deltaTime;
				}else{
					this.y[i] -= this.spd[i] *7 * deltaTime;
				}
				ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5,30,30)
				if(this.y[i] < 10){
					this.alive[i] = false;
				}
			}
		}
	}
}
fruitObj.prototype.born = function(i){

	var aneID = Math.floor(Math.random() * ane.num);
	this.x[i] = ane.x[aneID]
	this.y[i] = canHeight - ane.len[aneID]
	this.l[i] = 0;
	this.alive[i] = true;
	var ran = Math.random();
	if(ran < 0.2){
		this.fruitType[i] = 'blue';
	}else{
		this.fruitType[i] = "orange";
	}
}

function fruitMonitor(){
	var num = 0
	for(var i = 0 ; i < ane.num; i++){
		if(fruit.alive[i]) num++
	}
	if(num < 15){
		sendFruit()
		return ;
	}
}
function sendFruit(){
	for(var i = 0; i< ane.num; i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return
		}
	}
}
