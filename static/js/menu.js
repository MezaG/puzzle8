var menuState = 
{
	create: function ()
	{
		var startLabel = game.add.text(80, 80, 'Presiona la tecla de espacio para empezar', {font: '50px RetroFont', fill: '#ffffff'});
		// Get space key to start game
		var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		// When the player presses the space key start the function
		spaceKey.onDown.addOnce(this.start, this);
	},

	// The start function calls the play state
	start: function () 
	{
		game.state.start('play');
	},
};
