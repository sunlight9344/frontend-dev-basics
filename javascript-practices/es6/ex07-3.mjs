/**
 * named export <- goat 이걸로 쭉 갈 것 같음요구르트
 * 
 * 1. exports(require) 와 비슷하다.
 * exports.add = ...
 * exports.subtract = ...
 * 
 * 2. destricting이 가능하다.
 * 
 */ 

export const add = function(a, b) {
    return a + b;
}

export const subtract = function(a, b) {
    return a - b;
}

// (참고) 참고하라고 ㅋㅋ 동일함 둘 중에 선택하기 근데 위에거를 더 쓸 것 같긴 함
// const add = function(a, b) {
//     return a + b;
// };

// const subtract = function(a, b) {
//     return a - b;
// };

// export {add, subtract};