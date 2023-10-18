var myVar1 = undefined;
var myVar2;
var myVar3 = null;

console.log(myVar1, myVar2, myVar3);

console.log(myVar1 == myVar3);
console.log(myVar1 === myVar3);

console.log('4' == 4);
console.log(false == 0);
console.log('abc' == new String('abc'));

console.log(true + 10);
console.log('afasdf' + 10 + '11111' + true);
console.log('abc' + new String('def'));
console.log(1 + '11');
console.log(parseInt('11') + 1);

console.log('4' === 4);
console.log(true === 1);
console.log('abc' === new String('abc'));

console.log(2 === 4);
console.log('abc' === 'bcd');
console.log(new Number(10) === new Number(10));
console.log(1 === 1);
console.log('ehllo' === 'ehllo');