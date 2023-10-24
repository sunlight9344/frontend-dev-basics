<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>  
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script>
// DOM Load Event
// 1. load: DOM, CSSOM, Image 모두 다 로딩
// 2. DOMContentLoaded: DOM만 로딩
window.addEventListener('DOMContentLoaded', function() {
	document
		.getElementsByTagName('button')[0]
		.addEventListener('click', function(){
			var xhr = new XMLHttpRequest();
			
			xhr.addEventListener('readystatechange', function() {
				// readyState: 0 /request 초기화 되기 전
				if(this.readyState === XMLHttpRequest.UNSENT) {
					console.log('State:UNSENT');
				// readyState: 1 /서버와 연결이 성공
				} else if(this.readyState === XMLHttpRequest.OPENED) {
					console.log('State:OPENDED');
				// readyState: 2 /서버가 request를 받음
				} else if(this.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
					console.log('State:HEADERS_RECEIVED');
				// readyState: 3 /response 처리 중
				} else if(this.readyState === XMLHttpRequest.LOADING) {
					console.log('State:LOADING');
				// readyState: 4 /response 처리 중
				} else if(this.readyState === XMLHttpRequest.DONE) {
					console.log('State:DONE');
					
					if(this.status != 200) {
						console.error(this.status, this.state);
						return;
					}
					
					console.log(this.responseText, typeof(this.responseText));
					
					var response = JSON.parse(this.responseText);
					console.log(response);
				}
			
				var vo = response.data;
				var htmls = "";
				htmls += ("<h3>" + vo.no + "</h3>");
				htmls += ("<h4>" + vo.name + "</h4>");
				htmls += ("<h5>" + vo.contents + "</h5>");
				
				document
					.getElementById("data")
					.innerHTML = htmls;
			
			});
			
			xhr.open('get', '${pageContext.request.contextPath}/api/json', true/*async*/);
			xhr.send();
		});
});
</script>
</head>
<body>
	<h1>this is json02: XMLHttpRequest 직접 사용하기 page</h1>
	<button>데이터 가져오기</button>
	<div id='data'></div>
</body>
</html>