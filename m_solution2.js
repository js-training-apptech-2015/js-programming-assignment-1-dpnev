/**
Returns a maximal XOR value for two numbers between A and B (including A and B)
	A, B are valid (integer) JavaScript numbers
    A < B
*/
function solution2(a, b)
{
	assert(a === -(-a)); 
	assert(b === -(-b)); 
	assert(a < b);

	var result = a ^ b;
	
	for(i = a; i <= b; i++)
	{
		for(j = i+1; j <= b; j++)
		{
			var r = i ^ j;
			if (r > result)
			{
				result = r;
			}
		}
	}
	
	return result;
}
