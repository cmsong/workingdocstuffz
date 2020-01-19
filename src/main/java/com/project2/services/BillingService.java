package com.project2.services;

import java.util.List;

import com.project2.models.Billing;

public interface BillingService {
	
	public Billing createBilling(Billing billing);
	public Billing getBillingById(int id);
	public List<Billing> allBilling();
	public Billing updateBilling(Billing change);
	public boolean deleteBilling(Billing billing);

}
