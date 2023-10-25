package ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch08.dto.JsonResult;
import ch08.vo.UserVo;

@RestController
@RequestMapping("/api/user")
public class ApiRestController {
	
	@PostMapping
	public JsonResult create(@RequestBody UserVo vo) {
		vo.setNo(1L);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	@GetMapping
	public JsonResult read() {
		List<UserVo> list = new ArrayList<>();
		
		UserVo vo1 = new UserVo();
		vo1.setName("어루미");
		vo1.setNo(1L);
		vo1.setEmail("dlfnal@gmail.com");
		
		list.add(vo1);
		
		return JsonResult.success(list);
	}
	
	@PutMapping("{no}")
	public JsonResult update(
		@PathVariable("no") Long no, 
		@RequestBody UserVo vo) {
		
		vo.setNo(no);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
}
