package com.project2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project2.models.Users;
import com.project2.services.UsersService;

@RestController
public class UsersController {
	
	@Autowired
	UsersService us;
	
	@PostMapping(value="/users", consumes="application/json")
	public Users createUsers(@RequestBody Users users) {
		return us.createUsers(users);
	}
	
	@GetMapping(value="/users/search")
	public List<Users> getUsersByUsername(@RequestParam(required=false)String username){
		return us.getUsersByUsername(username);
	}
	
	@GetMapping(value="/users")
	public List<Users> allUsers(){
		return us.allUsers();
	}
	
	@PutMapping(value="/users", consumes="application/json")
	public Users updateUsers(@RequestBody Users change) {
		return us.updateUsers(change);
	}

}
