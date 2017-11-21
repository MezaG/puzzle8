// this is the file for booting the game
var bootState = 
{
	// The create function (automatically called)
	create: function () 
	{
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.state.start('load');
	}
};
