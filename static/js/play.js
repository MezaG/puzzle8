var parsedGoal;
var playState = {
create: function ()
{
	// Start the game	
			sprite = game.add.sprite(0,200,'board');
			game.add.sprite(800,200,'board2');
			sprite.animations.add('blink');
			sprite.animations.play('blink',18,true);
			game.add.sprite(450,50,'title');
			parsedGoal = JSON.parse(this.game.cache.getText('goal'));
			goal = parsedGoal.goal;

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
					game.add.sprite(posx, posy, spriteName);
				}
			}
			for (let i = 0; i < goal[0].length; i++)
			{
				for (let j = 0; j < goal.length; j++)
				{
					let spriteName;
					let posx;
					let posy;
					//console.log(matrix[i][j]);
					//console.log(i);
					//console.log(j);
					// get position to pin at x
					if (j == 0) {posx = 850;}
					else if (j == 1) {posx = 990;}
					else {posx = 1130;}
					// get position to ping at y
					if (i == 0) {posy = 250;}
					else if (i == 1) {posy = 390;}
					else { posy = 530;}
					// switch statement get the name of the value number
					switch(goal[i][j])
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
					game.add.sprite(posx, posy, spriteName);
				}
			}
		var startLabel = game.add.text(450, 730, 'Presiona la tecla de espacio para empezar', {font: '20px RetroFont', fill: '#ffffff'});
		// Get space key to start game
		var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		// When the player presses the space key start the function
		spaceKey.onDown.addOnce(this.start, this);
},
	
	// The start function calls the play state
	start: function () 
	{
		//spaceKey.inputEnabled = false;	
		game.state.start('resolve',clearworld = false);
	},

	update: function () 
	{
		// if button pressed start the game button.inputEnable = false call an outside function which will solve the puzzle erase update function create a new
		// state and call the state with clearworld = False the new state will only have the update function running the solving code
	},
};
