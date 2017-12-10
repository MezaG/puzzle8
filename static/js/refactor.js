function useBestMove(XYarray, history, zeroPos)
{
	while(XYarray.length > 0)
	{
		let tempXY = XYarray.pop();
		let temp = matrix[zeroPos['x']][tempXY]
		matrix[zeroPos['x']][zeroPos['y']] = temp;
		matrix[zeroPos['x']][tempXY] = 0;
		let newHeuristic = this.evaluation(matrix);
		if(heuristic > newHeuristic)
		{
			for(let record of history)
			{
				console.log(record);
				if(record !== matrix)
				{
					cambio = true;
				}
			}
		}
		else
		{
			matrix[zeroPos['x']][zeroPos['y']] = 0;
			matrix[zeroPos['x']][tempXY] = temp;
		}
	}
}
