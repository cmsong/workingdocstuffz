package com.revature.services;

import java.util.List;

import com.revature.entities.Review;

public interface ReviewService {

	public Review createReview(Review review);
	public Review getReviewByIds(String user, int gId);
	public List<Review> getReviewByGame(int gId);
	public List<Review> getReviewByUser(String user);
	public List<Review> allReviews();
	public Review updateReview(Review change);
	public boolean deleteReview(Review review);
	public Review getReviewByRId(int rId);
}
