// 1. string primitive type
// 2. String 객체 함수 : Stirng.prototype.*

// 배열처럼 접근이 가능하다. python 이랑 비슷한듯?
var str1 = 'Hello World';

for(var i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}

// 문자열 합치기치기
var str2 = 'hello';
var str3 = 'world';
var str4 = str2 + ' ' + str3;
console.log(str4);

// casting
var str5 = "5" + 5;
console.log(str5);

var str6 = "boolean:" + true;
console.log(str6);

// 객체 함수
var str7 = "string1 string2 string3";

var index = str7.indexOf('string2'); //8
console.log(index);

index = str7.indexOf('string4');
console.log(index);

var str8 = str7.substring(10, 13);
console.log(str8);