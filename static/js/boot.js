// this is the file for booting the game
var bootState = 
{
	preload: function()
	{
		game.load.spritesheet('loadingboard','static/images/assets/loadingboard.png',150,150,9);
		game.load.spritesheet('loading','static/images/assets/loading.png',128,128,5);

	},
	// The create function (automatically called)
	create: function () 
	{
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.state.start('load');
	}
};
