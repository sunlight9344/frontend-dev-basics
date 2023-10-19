// DATE 객체 함수: Data.prototype.*

var now = new Date();
console.log(now);

var d1 = new Date(2023, 9/*10-1*/, 19);
console.log(d1);

var d2 = new Date(2023, 9, 19, 22, 22, 22);
console.log(d2);

console.log(
`
${now.getFullYear()}년
${now.getMonth()}월
${now.getDate()}일 
`
);