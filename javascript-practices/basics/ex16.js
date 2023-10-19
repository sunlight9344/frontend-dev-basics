function f1(a, b) {
    return a + b;
}
console.log(typeof(f1), f1 instanceof Function, f1(10, 20));

var f2 = function(a, b) {
    return a + b;
}
console.log(typeof(f2), f2 instanceof Function, f2(10, 20));

var f3 = new Function('a', 'b', 'return a+b;');
console.log(typeof(f3), f3 instanceof Function, f3(10, 20));

setTimeout(function() {
    console.log('time out !!!');
}, 10);

// 익룡 함수의 또 다른 예시

var r = (function(a, b) {
     return a + b;
})(10, 20);

console.log(r);


// 가변 파라미터
var sum = function() {

    // for(var i = 0; i < arguments.length; i++) {
    //     sum += arguments[i]
    // }

    // error : 유사배열
    // arguments의 __proto__ 는 Object.prototype에 chain이 되어 있기 때문에 forEach를 호출 할 수 없다. (arguments는 Object 인스턴스이다)
    // arguments.forEach(function(e) {
    //     console.log(e);
    // });

    var sum = 0;

    Array.prototype.forEach.call(arguments, function(e){
        sum += e;
    });

    return sum;
};

console.log(sum(1));
console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));