/**
Returns a minimal number of days it will take John to get to the destination from his current position.
a - current postion
b = total path
c - path per day
*/
function solution1(a, b, c)
{
	assert(a === -(-a)); 
	assert(b === -(-b)); 
	assert(c === -(-c));
	assert(a < b);
	assert(c > 0);

	return Math.ceil((b-a) / c);
}
