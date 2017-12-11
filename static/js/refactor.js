function useBestMove(XYarray, zeroPos, matrix, heuristic, XY)
{
	while(XYarray.length > 0)
	{
		let tempXY = XYarray.pop();
		switch(XY)
		{
			case 'x':
			let temp = matrix[tempXY][zeroPos['y']]
			matrix[zeroPos['x']][zeroPos['y']] = temp;
			matrix[tempXY][zeroPos['y']] = 0;
			break;
			
			case 'y':
			let temp = matrix[zeroPos['x']][tempXY]
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
			if(XYarray.lenght == 1)
				return matrix;
			else
			{
				matrix[zeroPos['x']][zeroPos['y']] = 0;
				matrix[zeroPos['x']][tempXY] = temp;
			}
		}
	}
}
