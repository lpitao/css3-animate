window.onload = game;

var can1,
	can2,
	ctx1,
	ctx2,
	lastTime,
	deltaTime,
	bgPic = new Image(),
	canWidth,
	canHeight,
	ane,
	fruit,
	mom;
function game(){
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}
function init(){
	can1 = document.querySelector("#canvas1");	
	ctx1 = can1.getContext('2d');
	can2 = document.querySelector("#canvas2");	
	ctx2 = can2.getContext('2d');
	
	bgPic.src = 'src/girl.jpeg';
	canWidth = can1.width;
	canHeight = can1.height;
	
	ane = new aneObj();
	ane.init();
	
	fruit = new fruitObj();
	fruit.init();
	
	mom = new momObj();
	mom.init();
}
function gameloop(){
	window.requestAnimationFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	
	drawBackground();
	ane.draw();
	fruit.draw();
	fruitMonitor();
	mom.draw();
}
