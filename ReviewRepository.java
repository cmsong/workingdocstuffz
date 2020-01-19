package com.revature.repositories;

import java.util.List;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.entities.Review;

@Repository
public interface ReviewRepository extends CrudRepository<Review, Integer>{
	List<Review> findByUsernameAndGId(String username, int gId);
	List<Review> findByGId(int gId);
	List<Review> findByUsername(String username);
	List<Review> findByRId(int rId);
}
