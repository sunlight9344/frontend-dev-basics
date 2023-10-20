// 클로저 clouser
// 함수와 그 함수가 정의되었을 때 변수 스코프(Lexical Scope) 와의 조합

// 1. 자유변수에 닫혀(closed, 엮여) 있는 함수
// 2. 클로저는 자신이 정의될 때의 Scope 를 기억하고 있음
// 3. 함수가 자신이정의 되었을 떄의 스코프를 기억하여 자신이 정의된 스코프 밖에서 호출되어도 사용가능
// 4. 왜 쓰냐?
//    - 전역변수회피
//    - 상태 유지*: useState
//    - 정보 은닉 : useState <- 이게 closuer임

var f1 = function() {
    const s = "Hello World";
    const inner = function() {
        console.log(s);
    }
    inner();
};

f1();

/* closuer */
const f2 = function() {
    const s = "Hello World";

    const inner = function() {
        console.log(s);
    }

    return inner;
}

const closure = f2();
closure();


function f3() {
    console.log(a);
}