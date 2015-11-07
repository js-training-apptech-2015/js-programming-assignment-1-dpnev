// Tests
var test2 = 0;

assert(1^2 === solution2(1, 2), 'Failed solution2 test'+test2++);
assert(3 === solution2(0, 2), 'Failed solution2 test'+test2++);
assert(1 === solution2(-1, 1), 'Failed solution2 test'+test2++);

assert(31 === solution2(12, 19), 'Failed solution2 test'+(test2++) + ' result is ' + solution2(12, 19));
assert(15 === solution2(-10, 10), 'Failed solution2 test'+(test2++) + ' result is ' +solution2(-10, 10) );
assert(31 === solution2(-20, -10), 'Failed solution2 test'+ (test2++) + ' result is ' + solution2(-20, -10));

console.log("solution2() tests success!");