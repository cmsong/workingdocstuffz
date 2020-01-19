package com.project2.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project2.models.Billing;

@Repository
public interface BillingRepository extends CrudRepository<Billing,Integer>{

}
