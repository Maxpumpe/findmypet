package com.maxpumpe.findmypet.repository;

import com.maxpumpe.findmypet.model.AppUser;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<AppUser, Long> {
	
	
	public AppUser findByEmail(String email); // find, read, get, query
	//public AppUser getById();

}