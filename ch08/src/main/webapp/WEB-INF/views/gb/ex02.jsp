<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%> 
<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
<title>mysite</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script type="text/javascript" src="${pageContext.request.contextPath }/jquery/jquery-3.7.1.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script>

// 무한 스크롤 처리는 scroll.jsp 참고
// api url /api/guestbook?sno=0
		// 무조건 맨 마지막꺼의 sno
		// 0보다 클 때 
		// order by 해서 limit 정해져 있고
		// where 에서 걸러서 paging 하지 말고 저렇게 해라
		// 맨 마지막꺼보다 작은애들중에 몇개 해서 뒤집어서 렌더링?
				//sno 보다 작은 no 의 역순 row 를 top-k(limit 0, k)
var render = function(vo, mode) {
	var html =
		"<li data-no='"+ vo.no + "'>" +
		"<strong>" + vo.name + "</strong>" +
		"<p>" + vo.contents + "</p>" +
		"<strong></strong>" +
		"<a href='#' data-no='"+ vo.no + "'>삭제</a>" +
		"</li>"
	$("#list-guestbook")[mode ? 'prepend' :'append'](html);
}

var fetch = function() {
	$.ajax({
		url: "/ch08/api/guestbook",
		type: "get",
		dataType: "json",
		success: function(response) {
			if(response.result === 'fail') {
				console.error(response.message);
				return;
			}
			response.data.forEach(function(vo) {
				render(vo, false);
			});
		}
	})
}

$(function() {
	$(window).scroll(function() {
		if(flag) {
			return;
		}
		
		flag = true;
		// 조건(스크롤바가 바닥에 도착 하면) fetch() 를 call 호출한다
	})
	
	fetch();
});



$(function() {
	$('#add-form').submit(function(event) {
		event.preventDefault();
		
		var vo = {};
		vo.name = $("#input-name").val();
		vo.password = $("#input-password").val();
		vo.contents = $("#tx-content").val();
		
		$.ajax({
			url: '/ch08/api/guestbook',
			type: 'post',
			dataType: 'json',
			contentType: 'application/json',
			data: JSON.stringify(vo),
			success: function(response) {
				if(response.result === 'fail') {
					console.error(response.message);
					return;
				}
				render(response.data);
			}
		})
	});
});

</script>
</head>
<body>
	<div id="container">
		<div id="content">
			<div id="guestbook">
				<h1>방명록</h1>
				<form id="add-form" action="" method="post">
					<input type="text" id="input-name" placeholder="이름">
					<input type="password" id="input-password" placeholder="비밀번호">
					<textarea id="tx-content" placeholder="내용을 입력해 주세요."></textarea>
					<input type="submit" value="보내기" />
				</form>
				<ul id="list-guestbook"></ul>
			</div>
			<div id="dialog-delete-form" title="메세지 삭제" style="display:none">
  				<p class="validateTips normal">작성시 입력했던 비밀번호를 입력하세요.</p>
  				<p class="validateTips error" style="display:none">비밀번호가 틀립니다.</p>
  				<form>
 					<input type="password" id="password-delete" value="" class="text ui-widget-content ui-corner-all">
					<input type="hidden" id="hidden-no" value="">
					<input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
  				</form>
			</div>
			<div id="dialog-message" title="" style="display:none">
  				<p></p>
			</div>						
		</div>
	</div>
</body>
</html>