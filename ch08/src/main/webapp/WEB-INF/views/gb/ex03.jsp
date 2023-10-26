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
	var dialogDelete = $("#dialog-delete-form").dialog({
		autoOpen: false,
		model: true,
		buttons: {
			"삭제": function() {
				// var no, var password 를 빼오는게 문제임
				
				var no =$('#hidden-no').val();
				var password = $('#password-delete').val();
				console.log("ajax 삭제하는 걸 여기서 ...");
				
				console.log(no, password);
				
				// 후처리
				//1. response.data 가지고 있는 <li data+no='{no}' > 찾아서 삭제
				//2. dialogDelete.dialog('close');
				
				//3. 폼의 input reset 해주기
				
			},
			"취소": function() {
				$(this).dialog('close');
			}
		},
		close: function() {
			console.log("야 다이알로그 꺼졌다 이제 정리 ㄱㄱ");
			$('#password-delete').val('');
		}
	});
	
	
	// 댓글 삭제 버튼 click 이벤트 처리 dom 이 있는 상태에서 찾아서 해야하는데
	// fetch() 통신이라서 생기기 전에 즉 dom 이 다 생성되기 전에 해버릴 가능성이 큼
	// -> Live Event 해야 함 -> document 한테 click 이벤트 위임해 보리기
	/*
	$("#list-guestbook li a").click(function(event) {
		event.preventDefault();
		console.log("clicked");
	})
	*/
	
	$(document).on('click', '#list-guestbook li a',function() {
		event.preventDefault();
		
		$('#hidden-no').val($(this).data('no'));
		
		console.log($(this).data('no'));
		dialogDelete.dialog('open');
		// ajax 로 조져 !!!!!
		// 근데 어떻게 해 
	});
	
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