var gameProperties =
	{
		screenWidth: window.screen.width,
		screenHeight: window.screen.height,
	};
var sprite;
var array = [0,1,2,3,4,5,6,7,8];
var matrix = [[0,0,0],[0,0,0],[0,0,0]];
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
	// This will shuffle the array then proceed creating a matrix which will be the puzzle		
			var i = array.length;
			while(--i) 
			{
				var j = Math.floor(Math.random() * ( i + 1 ) );
				var tempi = array[i];
				var tempj = array[j];
				array[i] = tempj;
				array[j] = tempi;
			}
			console.log(array);	
		// Populate the matrix with the shuffled array
			for (let i = 0; i < matrix[0].length; i++)
			{
				for (let j = 0; j < matrix.length; j++)
				{
					matrix[i][j] = array.pop();
				}
			}		
			console.log(matrix);	
		},
		create: function(){
			sprite = game.add.sprite(0,200,'board');
			sprite.animations.add('blink');
			sprite.animations.play('blink',18,true);
			game.add.sprite(450,50,'title');
		
			for (let i = 0; i < matrix[0].length; i++)
			{
				for (let j = 0; j < matrix.length; j++)
				{
					let spriteName;
					let posx;
					let posy;
					//console.log(matrix[i][j]);
					//console.log(i);
					//console.log(j);
					// get position to pin at x
					if (j == 0) {posx = 50;}
					else if (j == 1) {posx = 190;}
					else {posx = 330;}
					// get position to ping at y
					if (i == 0) {posy = 250;}
					else if (i == 1) {posy = 390;}
					else { posy = 530;}
					// switch statement get the name of the value number
					switch(matrix[i][j])
					{
						case 0:
							spriteName = 'hollow';
							break;
						case 1:
							spriteName = 'number1';
							break;
						case 2:
							spriteName = 'number2';
							break;
						case 3:
							spriteName = 'number3';
							break;
						case 4:
							spriteName = 'number4';
							break;
						case 5:
							spriteName = 'number5';
							break;
						case 6:
							spriteName = 'number6';
							break;
						case 7:
							spriteName = 'number7';
							break;
						case 8:
							spriteName = 'number8';
							break;

					}
					console.log(posx,posy,spriteName);
					game.add.sprite(posx, posy, spriteName);
				}
			}	
		//	game.add.sprite(50,250,'hollow');
		//	game.add.sprite(50,390,'number3');
		//	game.add.sprite(50,530,'number6');
		//	game.add.sprite(190,250,'number1');
		//	game.add.sprite(190,390,'number4');
		//	game.add.sprite(190,530,'number7');
		//	game.add.sprite(330,250,'number2');
		//	game.add.sprite(330,390,'number5');
		//	game.add.sprite(330,530,'number8');
		},
		update: function(){},
	};

var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');
game.state.add(states.game, gameState);
game.state.start(states.game);
