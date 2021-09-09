package com.maxpumpe.findmypet.repository;

import com.maxpumpe.findmypet.model.AppUser;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Deprecated
@Repository
public interface UserRepo extends JpaRepository<AppUser, Long> {
	
	
	public AppUser findByEmail(String email);
	

}