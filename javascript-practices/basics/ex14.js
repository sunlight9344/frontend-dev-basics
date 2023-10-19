// URL 다루기

var url = "https://www.mysite.com/user?name=둘리아모리진진모리장단모르기리므리&email=sunlight9344@gmail.com";

// 예1) 리다이렉트
// window.location.href = url;

// 예2) ajax 통신
// $.ajax(url, {})
// fetch(url, 옵션)

// 1. escape: URL 전부를 encoding 사용 하지 마 그러니까, deprecated
var url2 = escape(url);
console.log(url2);

// 2. encodeURL

// 3. encodeURLComponent