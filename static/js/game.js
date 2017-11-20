var gameProperties =
	{
		screenWidth: window.screen.width,
		screenHeight: window.screen.height,
	};

var states = 
	{
		game: "game",
	};

var gameState = function(game)
	{

	};

gameState.prototype = 
	{
		preload: function(){},
		create: function(){},
		update: function(){},
	};

var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');
game.state.add(states.game, gameState);
game.state.start(states.game);
