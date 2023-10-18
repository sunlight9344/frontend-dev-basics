// 자바 스크립트 객체 2: function
// 너무 팡션...? 사용하지 마세요...

var myFunction = function() {
    console.log('일반함수');
}

var MyObject = function(name, age) {
    this.name = name;
    this.age = age;
};

var o1 = new MyObject('둘리', 10);
var o2 = new MyObject('뿌뿌이', 99);

console.log(o1, o2);

