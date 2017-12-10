var assert = require('assert');
var matrix = 
[	[0,1,2],
	[3,4,5],
	[6,7,8]
];
var truematrix = 
[	[0,2,3],
	[1,4,5],
	[6,7,8]
];
var history = 
[
	[
		[0,2,3],
		[1,4,5],
		[6,7,8]
	],
	[
		[0,1,2],
		[3,5,4],
		[6,7,8]
	]
]

var correctzeroposition = 
{
	'x': 0,
	'y': 0
}

var wrongzeroposition = 
{
	'x': 1,
	'y': 0
}

describe('history', function() 
		{
			describe('record !== matrix', function()
			{
				it('Should return false if not found a record of the matrix in the history', function()
						{
							assert.equal(false, inRecord(history,matrix));
						});	
			});
		});


describe('history found', function() 
		{
			describe('record == matrix', function()
			{
				it('Should return true if found a record of the matrix in the history', function()
						{
							assert.ok(true, inRecord(history,truematrix));
						});	
			});
		});

function inRecord(recordHistory, puzzle)
{
	for(const record of recordHistory)
	{
		if(record == puzzle)
		{
			return true;
		}
	}
	return false;
}

describe('Position of zero', function()
	{
		describe('Get the position of zero in the matrix', function()
		{
			it('Should return the position of 0 in this case x: 0 y: 0', function()
				{
					assert.ok(correctzeroposition,zeroPos([[0,1,2],[3,4,5],[6,7,8]]));
				});
		});
	});

describe('Position of zero', function()
	{
		describe('Get the position of zero in the matrix', function()
		{
			it('Should return the position of 0 in this case x: 0 y: 0', function()
				{
					assert.ok(wrongzeroposition, zeroPos([[3,1,2],[0,4,5],[6,7,8]]));
				});
		});
	});

function zeroPos(matrix)
	{
		var position =
		{ 
			'x' : 0,
			'y' : 0
		}

		for(var i = 0; i < matrix[0].length; i++)
		{
			for(var j = 0; j < matrix.length; j++)
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


