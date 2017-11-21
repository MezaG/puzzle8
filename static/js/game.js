var gameProperties =
	{
		screenWidth: window.screen.width,
		screenHeight: window.screen.height,
	};
var sprite;
var states = 
	{
		game: "game",
	};

var gameState = function(game)
	{

	};

gameState.prototype = 
	{
		preload: function(){
			game.load.spritesheet('board','static/images/assets/animatedboard.png',512,512,15);
			game.load.image('hollow','static/images/assets/hollow.png');
			game.load.image('number1','static/images/assets/number1.png');
			game.load.image('number2','static/images/assets/number2.png');
			game.load.image('number3','static/images/assets/number3.png');
			game.load.image('number4','static/images/assets/number4.png');
			game.load.image('number5','static/images/assets/number5.png');
			game.load.image('number6','static/images/assets/number6.png');
			game.load.image('number7','static/images/assets/number7.png');
			game.load.image('number8','static/images/assets/number8.png');
			game.load.image('title','static/images/assets/puzzletitle.png');
		},
		create: function(){
			sprite = game.add.sprite(0,200,'board');
			game.add.sprite(50,250,'hollow');
			game.add.sprite(50,390,'number3');
			game.add.sprite(50,530,'number6');
			game.add.sprite(190,250,'number1');
			game.add.sprite(190,390,'number4');
			game.add.sprite(190,530,'number7');
			game.add.sprite(330,250,'number2');
			game.add.sprite(330,390,'number5');
			game.add.sprite(330,530,'number8');
			sprite.animations.add('blink');
			sprite.animations.play('blink',18,true);
			game.add.sprite(450,50,'title');
		},
		update: function(){},
	};

var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');
game.state.add(states.game, gameState);
game.state.start(states.game);
