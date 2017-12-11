var resolveState = {
	create: function ()
	{
		var history = new Array();
		var xarray = new Array();
		var yarray = new Array();
		var contador = 0;
		while(contador < 100){
			contador++;
		// 	if(contador == 100)
		// 		break;
		var heuristic = this.evaluation(matrix);
		var zeroPos = this.zeroPosition();
		if(zeroPos['y'] == 1)
		{
			yarray.push(0);
			yarray.push(2);
		}
		else
		{
			yarray.push(1);
		}
		if(zeroPos['x'] == 1)
		{
			xarray.push(0);
			xarray.push(2);
		}
		else
		{
			xarray.push(1);
		}

		// console.log('antes de x');
		// console.log(matrix);
		var bestMoveX = this.useBestMove(xarray, zeroPos, matrix, heuristic, 'x');
		// console.log('antes de y');
		// console.log(matrix);
		var bestMoveY = this.useBestMove(yarray, zeroPos, matrix, heuristic, 'y');
		// console.log(matrix);
		// console.log(bestMoveX);
		// console.log(bestMoveY);

		if(bestMoveX > bestMoveY)
		{
			if(!this.inRecord(history,bestMoveX))
				matrix = bestMoveX;
		}
		else
		{
			if(!this.inRecord(history,bestMoveY))
				matrix = bestMoveY;
		}

		history.push(matrix);

		if(history.length > 10)
		{
			history.pop();
		}
		console.log(history);


	}
	},

	inRecord: function(recordHistory, puzzle)
	{	
		for(const record of recordHistory)
		{
			if(record == puzzle)
			{
				return true;
			}
		}
		return false;
	},
	
	useBestMove: function (XYarray, zeroPos, passedMatrix, heuristic, XY)
	{
	Object.deepExtend = function(destination, source)
	{
		for (var property in source)
		{
			if(source[property] && source[property].constructor && source[property].constructor === Object)
			{
				destination[property] = destination[property] || {};
				arguments.callee(destination[property], source[property]);
			}
			else
			{
				destination[property] = source[property];
			}
		}
		return destination;
	};
		var matrix;
		Object.deepExtend(matrix, passedMatrix);
		while(XYarray.length > 0)
		{
			let tempXY = XYarray.pop();
			switch(XY)
			{
				case 'x':
				var temp = matrix[tempXY][zeroPos['y']]
				matrix[zeroPos['x']][zeroPos['y']] = temp;
				matrix[tempXY][zeroPos['y']] = 0;
				break;
				
				case 'y':
				var temp = matrix[zeroPos['x']][tempXY]
				matrix[zeroPos['x']][zeroPos['y']] = temp;
				matrix[zeroPos['x']][tempXY] = 0;
				break;
			}
			let newHeuristic = this.evaluation(matrix);
			if(heuristic > newHeuristic)
			{
				return matrix;
			}
			else
			{
				if(XYarray.lenght == 0)
				{
					console.log('asdasd');
					return matrix;
				}
				else
				{
					matrix[zeroPos['x']][zeroPos['y']] = 0;
					matrix[zeroPos['x']][tempXY] = temp;
				}
			}
		}
	},	 


	evaluation: function(puzzle)
	{
		var heuristic = 0;
		for(let i = 0; i < puzzle[0].length; i++)
		{
			for(let j = 0; j < puzzle.length; j++)
			{
				if(puzzle[i][j] != goal[i][j])
				{
					heuristic++;
				}
			}
		}
		return heuristic;
	},

	zeroPosition: function()
	{
		var position =
		{ 
			'x' : 0,
			'y' : 0
		}

		for(let i = 0; i < matrix[0].length; i++)
		{
			for(let j = 0; j < matrix.length; j++)
			{
				if(matrix[i][j] == 0)
				{
					position.x = i;
					position.y = j;
				}
			}
		}
		return position;
	}

};
