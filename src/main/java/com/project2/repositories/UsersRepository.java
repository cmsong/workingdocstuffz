package com.project2.repositories;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project2.models.Users;

@Repository
public interface UsersRepository extends CrudRepository<Users,Integer>{
	
	List<Users> findByUsername(String username);

}
