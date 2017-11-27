var gameProperties =
	{
		screenWidth: window.screen.width,
		screenHeight: window.screen.height,
	};

var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('resolve', resolveState);
game.state.start('boot');
