var sprite;
var loadingSprite;
var loadingBoardSprite;
var animbs;
var animls;
var array = [0,1,2,3,4,5,6,7,8];
var matrix = [[0,0,0],[0,0,0],[0,0,0]];
var loadState = 
{
	// The preload state to define and load assets
	preload: function () 
	{
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
		game.load.image('board2','static/images/assets/board.png');
		game.load.text('goal','static/data/goal.json');
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
		// Populate the matrix with the shuffled array
		for (let i = 0; i < matrix[0].length; i++)
		{
			for (let j = 0; j < matrix.length; j++)
			{
				matrix[i][j] = array.pop();
			}
		}		
	},

	onCreateCallback: function () 
	{
		loadingSprite = game.add.sprite(615,400,'loading');
		loadingSprite.animations.add('loadBlink');
		loadingBoardSprite = game.add.sprite(600,250,'loadingboard');
		loadingBoardSprite.animations.add('loadBoard');
		loadingSprite.animations.play('loadBlink',5,true);
		loadingBoardSprite.animations.play('loadBoard',9,true);
		
		// var startLabel = game.add.text(470, 550, 'Presiona la tecla de espacio para empezar', {font: '20px RetroFont', fill: '#ffffff'});
		// // Get space key to start game
		// var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		// // When the player presses the space key start the function
		// spaceKey.onDown.addOnce(this.start, this);
		
	},

	create: function ()
	{
		// loadingSprite.animations.play('loadBlink',5,false);
		// loadingBoardSprite.animations.play('loadBoard',5,false);
		// Call the start menu
		game.state.start('menu');
	},
};
