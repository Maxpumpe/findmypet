package com.maxpumpe.findmypet.model;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface AppUserRepository  extends JpaRepository<AppUser, Long> {
	Optional<AppUser> findByUserName(String userName);
	
	Optional<AppUser> findByEmail(String userName);
}
