// 별다른 자료구조가 업서...
// only ... array ...

var a1 = new Array();
console.log(a1);
console.log(typeof(a1), a1 instanceof Array, a1.length);

// 파라미터가 한 개 일 때 배열의 크기 지정 하는 것
var a2 = new Array(10);
console.log(typeof(a2), a2 instanceof Array, a2.length);

// 배열의 크기를 지정 하는 것은 아무런 의미가 없다 왜냐하면 동적으로 배열은 늘어나기 때문2다.
a2[0] = 0;
a2[13] = 1;
console.log(typeof(a2), a2 instanceof Array, a2.length,a2[11]);

// 생성자 함수의 파라미터가 2개 이상일 경우: 초기값을 지정한다
var a3 = new Array(1,2,3,4,5);
console.log(a3, a3.length);