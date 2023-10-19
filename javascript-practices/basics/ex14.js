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

// 2. encodeURL: URL 전체 중 파라미터만 encoding 한다. url 전체를 encoding 해야 하는 경우(o)
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURLComponent: URL 중에 값만 Encoding해야 하는 경우 사용한다.
var url4 = encodeURIComponent(url);
console.log(url4);

// 4. encodingURIComponent 사용 예
// 만들어야 하는 url: "http://www.mysite.com/user?name=둘리&email=dooly@gamil.com"

var url = "http://www.mysite.com/user";
var formData = {
    name: "둘리",
    email: "dooly@gmail.com"
}

var toQueryString = function(o) {
    var qs = [];
    for(prop in o) {
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }

    return qs.join("&")
}

console.log(url + "?" + toQueryString(formData));
console.log(`${url}?${toQueryString(formData)}`);