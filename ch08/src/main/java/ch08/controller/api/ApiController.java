package ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import ch08.dto.JsonResult;
import ch08.vo.GuestbookVo;

@Controller
@RequestMapping("/api")
public class ApiController {

	@ResponseBody
	@RequestMapping("/text")
	public String text() {
		return "Text 데이타";
	}
	
	@ResponseBody
	@RequestMapping("/html")
	public String html() {
		return "<h1>h1h1h1h1h1</h1><p>ppppp</p>";
	}
	
	@ResponseBody
	@RequestMapping("/json")
	public JsonResult json() {
		GuestbookVo vo = new GuestbookVo();
		vo.setNo(1);
		vo.setName("둘리");
		vo.setContents("뿌까뿌까");
		
		return JsonResult.success(vo);
	}
}
