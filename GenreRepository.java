package com.revature.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.entities.Genre;
@Repository
public interface GenreRepository extends CrudRepository<Genre, Integer>{

}
