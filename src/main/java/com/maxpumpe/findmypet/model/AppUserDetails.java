package com.maxpumpe.findmypet.model;

import java.awt.List;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class AppUserDetails implements UserDetails {


	private static final long serialVersionUID = 3625056575301119632L;
	private String userName;
	private String password;
	private String teste;
	private boolean active;
	private final AppUser user;
	private java.util.List<SimpleGrantedAuthority> authorities; 

	

	

	
	public AppUserDetails(  AppUser user) {
		this.user = user;
		this.teste = "irgendwas";
	}
	
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		Collection<GrantedAuthority> role= new HashSet<>();
		if(user.getRoles() == Role.ADMIN) {
			role.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
		}
		else {
			role.add(new SimpleGrantedAuthority("ROLE_USER"));
		}
		return role;
	}

	@Override
	public String getPassword() {
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		return user.getEmail(); // Anmeldung soll mit der E-Mail-Adresse erfolgen
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	public AppUser getUser() {
		return user;
	}


}
