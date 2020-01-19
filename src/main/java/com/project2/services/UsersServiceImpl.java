package com.project2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.project2.models.Users;
import com.project2.repositories.UsersRepository;

public class UsersServiceImpl implements UsersService {

	@Autowired
	UsersRepository ur;
	
	@Override
	public Users createUsers(Users users) {
		ur.save(users);
		return users;
	}

	@Override
	public List<Users> getUsersByUsername(String username) {
		return (List<Users>)ur.findByUsername(username);
	}

	@Override
	public List<Users> allUsers() {
		return (List<Users>)ur.findAll();
	}

	@Override
	public Users updateUsers(Users change) {
		return ur.save(change);
	}

	@Override
	public boolean deleteUsers(Users users) {
		try {
			ur.delete(users);
			return true;
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
	}

}
