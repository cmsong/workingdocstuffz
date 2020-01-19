package com.project2.services;

import java.util.List;

import com.project2.models.Users;

public interface UsersService {
	
	public Users createUsers(Users users);
	public List<Users> getUsersByUsername(String username);
	public List<Users> allUsers();
	public Users updateUsers(Users change);
	public boolean deleteUsers(Users users);

}
