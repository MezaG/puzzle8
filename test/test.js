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
