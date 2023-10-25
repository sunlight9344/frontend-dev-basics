package ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch08.dto.JsonResult;
import ch08.vo.GuestbookVo;

@RestController
@RequestMapping("/api/guestbook")
public class GuestbookController {

	// url 충돌날 떄 어떻게? 몰라
	
	@PostMapping
	public JsonResult ex01(@RequestBody GuestbookVo vo) {
		// service 불러서 add
		
		vo.setNo(1);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	@GetMapping
	public JsonResult ex02() {
		List<GuestbookVo> list = new ArrayList<>();
		
		GuestbookVo vo1 = new GuestbookVo();
		vo1.setNo(1);
		vo1.setName("이름하나");
		vo1.setContents("하나하나!!!");
		
		GuestbookVo vo2 = new GuestbookVo();
		vo2.setNo(2);
		vo2.setName("이름둘");
		vo2.setContents("둘둘!!!");
		
		GuestbookVo vo3 = new GuestbookVo();
		vo3.setNo(3);
		vo3.setName("이름셋");
		vo3.setContents("셋셋셋!!!");
		
		list.add(vo1);
		list.add(vo2);
		list.add(vo3);
		
		return JsonResult.success(list);
	}
	
}
