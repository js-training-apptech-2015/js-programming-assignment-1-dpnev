// Tests
var test1 = 0;

assert(5 === solution1(0, 21, 5), 'test'+test1++);
assert(4 === solution1(0, 20, 5), 'test'+test1++);
assert(4 === solution1(0, 19, 5), 'test'+test1++);
assert(4 === solution1(0, 18, 5), 'test'+test1++);
assert(4 === solution1(0, 17, 5), 'test'+test1++);
assert(4 === solution1(0, 16, 5), 'test'+test1++);
assert(3 === solution1(0, 15, 5), 'test'+test1++);
assert(1 === solution1(1, 2,  5), 'test'+test1++);
assert(1 === solution1(1, 2, 500), 'test'+test1++);
assert(1 === solution1(0, 1,  5), 'test'+test1++);
assert(1 === solution1(0, 1, 500), 'test'+test1++);
assert(1 === solution1(0, 1,  1), 'test'+test1++);
assert(2 === solution1(0, 1, 0.5), 'test'+test1++);
assert(4 === solution1(0, 1, 0.33), 'test'+test1++);

console.log("solution1() tests success!");