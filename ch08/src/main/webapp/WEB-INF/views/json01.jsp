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
	$('button').click(function() {
		$.ajax({
			url: '${pageContext.request.contextPath }/api/json',
			async: true,
			type: 'get',
			dataType: 'json',
			success: function(response) {
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
				
				<!--
				`
				<h3>${vo.no}</h3>
				<h4>${vo.name}</h4>
				<h5>${vo.contents}</h5>
				`
				-->
				
			},
			error: function(xhr, status, error) {
				console.error(status, error);
			}
		});
	});
});
</script>
</head>
<body>
	<h1>this is json01 page</h1>
	<button>데이터 가져오기</button>
	<div id='data'></div>
</body>
</html>