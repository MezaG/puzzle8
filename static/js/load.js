var sprite;
var array = [0,1,2,3,4,5,6,7,8];
var matrix = [[0,0,0],[0,0,0],[0,0,0]];
var loadState = 
{
	// The preload state to define and load assets
	preload: function () 
	{
		var loadingLabel = game.add.text(80, 150, 'cargando...',{font: '30px Courier', fill: '#ffffff'});
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

	create: function () 
	{
		// Call the start menu
		game.state.start('menu');
	},
};
