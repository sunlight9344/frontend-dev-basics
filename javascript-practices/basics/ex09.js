// 자바스크립트 객체4: prototype 기반의 상속과 overRiding: 자바스크립트 객체 지향 프로그래밍

var MyObject = function(name, age) {
    this.name = name;
    this.age = age;
}

MyObject.prototype.school = 'POSCODX';
MyObject.prototype.course = 'Spring';
MyObject.prototype.info = function() {
    console.log(this.name, this.age, this.school, this.course);
};

// MyObject 인스턴스 생성
var o1 = new MyObject('콜이마', 25);
o1.info();
o1.school = 'kakao';
o1.info();

// MyObject 인스턴스 생성2
var o2 = new MyObject("뿌찌", 10);
o2.info = function() {
    console.log('안녕하세요 방가워요 잘있어요 다시 만나요');
}
o2.info();


String.prototype.indexOf = function() {
    console.log('이게 되네 ㅋ');
}

var s = '전예준';
s.indexOf();
