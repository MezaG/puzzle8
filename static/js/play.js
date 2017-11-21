var playState = {
create: function ()
{
	// Start the game	
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
},
	update: function () 
	{

	},
};
