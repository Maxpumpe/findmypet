package com.maxpumpe.findmypet.model;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;



@Service
public class AppUserDetailsService implements UserDetailsService {

	@Autowired
	AppUserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		

	//	Optional<AppUser> user = userRepository.findByUserName(userName);
		Optional<AppUser> user = userRepository.findByEmail(userName);
		//if (user.isEmpty()) user = userRepository.findByUserName(userName);
		user.orElseThrow(() -> new UsernameNotFoundException("Not found " + userName));
		
		return user.map(AppUserDetails::new).get();
	}
	
	public AppUser save(AppUser user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		userRepository.save(user);
		return user;
	}

}
