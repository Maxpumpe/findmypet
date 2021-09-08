package com.maxpumpe.findmypet.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maxpumpe.findmypet.model.AppRole;
@Deprecated
public interface AppRoleRepo extends JpaRepository<AppRole, Long> {

	
	
	AppRole findByName(String name);
}
