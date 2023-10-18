// 1. 객체1 : object 타입

// 생성 방법 1
// () literal

// 생성 방법 2
// {} literal 을 사용하는 방법
var o2 = {};

// 내장 객체
// 사용자 정의 생성자 함수
var o1 = new Object();
o1.name = '둘리';
o1.age = 10;
o1.another = new Object();
o1.another.name = '마이콜';
o1.another.age = 30;

console.log(o1);

// 생성 방법 3
// (J)ava (S)cript (O)bject (N)otaion
var o3 = {
    name: '둘리',
    age: 10,
    another: {
        name: '마이콜',
        age: 30
    }
};

console.log(o3);

// XmlHttpRequest, fetch

response = '{"no":1, "age":10, "name":"리둘", "email":"dfaf@gmail.com"}';
var user = JSON.parse(response);
console.log(user.name, user.email);

// 생성생성성성생숭싱숭생송숭샘송

// 소생수심생소매수앳셋쇼마루루루로루로루롱

// new Jeans()