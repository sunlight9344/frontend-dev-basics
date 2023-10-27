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