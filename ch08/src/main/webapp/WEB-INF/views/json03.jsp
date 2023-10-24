<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>  
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath }/jquery/jquery-3.7.1.js"></script>
<script>
$(function() {
	var vo = {
		name: '뚜삐',
		password: '1234',
		contents: '빵빵!!!'
		
	};
	
	console.log($.param(vo));
	/*
	$('button').click(function() {
		$.ajax({
			url: '${pageContext.request.contextPath }/api/post01',
			async: true,
			type: 'post',
			dataType: 'json',
			contentType: 'application/x-www-form-urlencoded',
			data: $.param(vo),
			success: function(response) {
				console.log()
				/*
				if(response.result !== "success") {
					console.error(response.message);
					return;
				}
				
				var vo = response.data;
				var htmls = "";
				htmls += ("<h3>" + vo.no + "</h3>");
				htmls += ("<h4>" + vo.name + "</h4>");
				htmls += ("<h5>" + vo.contents + "</h5>");
				
				$("#data").html(htmls);
				
			},
			error: function(xhr, status, error) {
				console.error(status, error);
			}
		});
	});
	*/
});
</script>
</head>
<body>
	<h1>this is json3 page</h1>
	<button>데이터 본애기</button>
	<div id='data'></div>
</body>
</html>