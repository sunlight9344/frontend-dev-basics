package ch08.controller.api;

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
	
}
