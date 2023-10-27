// import 하기

// 1. unnamed export 모듈에서 import 할 때는 반드시 이름을 지정해야한다.
import myFunction from './ex07-1.mjs';
import myObject from './ex07-2.mjs';

console.log(myFunction(10, 20));
console.log(myObject.add(1,2));
console.log(myObject.subtract(2,1));

// 객체 분해 한번 써보자
// const {add, subtract} = myObject;
// console.log(add(10, 20), subtract(20, 10));

// 3.
// 1) named 다수 객체 import 시 객체 분해
import {add, subtract} from './ex07-3.mjs';
console.log(add(10,20), subtract(10,20));

// 2) named export는 import 대상이 다수가 될 수 있기 때문에 특정 이름을 지정할 수 없다.
//    대신에 * as (이름)을 사용할 수 있다.
import * as m from './ex07-3.mjs';
console.log(m.add(10, 20), m.subtract(10,20));