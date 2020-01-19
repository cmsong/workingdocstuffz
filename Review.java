package com.revature.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Review {
	
	@Id
	@GeneratedValue
	private int rId;
	@Column
	private int gId;
	@Column
	private String username;
	@Column
	private String reviewCont;
	@Column
	private int rating;
	
	public Review() {
		super();
	}
	public Review(int rId, int gId, String username, String reviewCont, int rating) {
		super();
		this.rId = rId;
		this.gId = gId;
		this.username = username;
		this.reviewCont = reviewCont;
		this.rating = rating;
	}
	public int getRId() {
		return rId;
	}
	public void setRId(int rId) {
		this.rId = rId;
	}
	@Override
	public String toString() {
		return "Reviews [rId =" + rId + ", g_id=" + gId + ", username=" + username + ", reviewCont=" + reviewCont + ", rating=" + rating
				+ "]";
	}
	public int getGId() {
		return gId;
	}
	public void setGId(int gId) {
		this.gId = gId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getReviewCont() {
		return reviewCont;
	}
	public void setReviewCont(String reviewCont) {
		this.reviewCont = reviewCont;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	
}
