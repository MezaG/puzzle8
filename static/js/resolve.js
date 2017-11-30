var resolveState = {
	create: function ()
	{
		var history = new Array();
		var xarray = new Array();
		var yarray = new Array();
		var contador = 0;
		// while(contador < 10){
		// 	contador++;
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
		var cambio = false;
		while(yarray.length > 0)
		{
			//let temporalMatrix = matrix.slice(0);
			let tempy = yarray.pop();
			let temp = matrix[zeroPos['x']][tempy];
			matrix[zeroPos['x']][zeroPos['y']] = temp;
			matrix[zeroPos['x']][tempy] = 0;
			let newHeuristic = this.evaluation(matrix);
			if(heuristic > newHeuristic)
			{
				for(let record of history)
				{
					console.log(record);
					if(record !== matrix)
					{
						cambio = true;
					//	matrix = temporalMatrix;
					}
				}
			}
			else
			{
				matrix[zeroPos['x']][zeroPos['y']] = 0;
				matrix[zeroPos['x']][tempy] = temp;
			}
		}
		while(xarray.length > 0)
		{
			//let temporalMatrix = matrix.slice(0);
			let tempx = xarray.pop();
			let temp = matrix[tempx][zeroPos['y']];
			matrix[zeroPos['x']][zeroPos['y']] = temp;
			matrix[tempx][zeroPos['y']] = 0;
			let newHeuristic = this.evaluation(matrix);
			if(heuristic > newHeuristic)
			{
				for(record of history)
				{
					if(record !== matrix)
					{
						cambio = true;
						//matrix = temporalMatrix;
					}
				}
			}
			else
			{
				matrix[zeroPos['x']][zeroPos['y']] = 0;
				matrix[tempx][zeroPos['y']] = temp;
			}
			if(!cambio)
			{
				if(xarray.length == 0) 
				{	
					matrix[zeroPos['x']][zeroPos['y']] = temp;
					matrix[tempx][zeroPos['y']] = 0;
				}
			}
		}
		history.push(matrix);
		if(history.length > 5)
		{
			history.pop();
		}
				for(let record of history)
				{
					console.log(record==matrix);
					if(record !== matrix)
					{
						cambio = true;
					//	matrix = temporalMatrix;
					}
				}
	// }
	},

	evaluation: function (puzzle)
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
