package com.project2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.project2.models.Billing;
import com.project2.repositories.BillingRepository;

public class BillingServiceImpl implements BillingService {

	@Autowired
	BillingRepository br;
	
	@Override
	public Billing createBilling(Billing billing) {
		br.save(billing);
		return billing;
	}

	@Override
	public Billing getBillingById(int id) {
		return br.findById(id).get();
	}

	@Override
	public List<Billing> allBilling() {
		return (List<Billing>)br.findAll();
	}

	@Override
	public Billing updateBilling(Billing change) {
		return br.save(change);
	}

	@Override
	public boolean deleteBilling(Billing billing) {
		try {
			br.delete(billing);
			return true;
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
	}

}
