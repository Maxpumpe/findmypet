package com.maxpumpe.findmypet.configuration.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.maxpumpe.findmypet.jwt.JwtUsernameAndPasswordAuthenticationFilter;

import static com.maxpumpe.findmypet.configuration.security.ApplicationUserRole.*;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class ApplicationSecurityConfiguration extends WebSecurityConfigurerAdapter {

	
	//private final ApplicationUserService applicationUserService;
	@Autowired
	UserDetailsService userDetailsService;

	private PasswordEncoder passwordEncoder;
	
	 // @Autowired public void ApplicationSecurityConfig(PasswordEncoder passwordEncoder)
	 //{ this.passwordEncoder = passwordEncoder; }
	   @Autowired public void ApplicationSecurityConfig(PasswordEncoder passwordEncoder)
	 { this.passwordEncoder = passwordEncoder; }
	

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
		.cors().and()
	    .csrf().disable()
	    .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
	    .and()
        .addFilter(new JwtUsernameAndPasswordAuthenticationFilter(authenticationManager()))

        .authorizeRequests()
        .antMatchers("/","/api/**",  "/static/**", "/js/*", "/css/*","/login/**").permitAll()
        .antMatchers("/apis/**").hasAnyRole(ADMIN.name(),USER.name())
        .anyRequest()
        .authenticated();
	}
		
	@Override   //Authenticate the USer
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		
		auth.authenticationProvider(authProvider());
	}

@Bean
public PasswordEncoder getPasswordEncoder() {
	//return NoOpPasswordEncoder.getInstance(); //TODO:test this 
	return passwordEncoder;
}
	
@Bean
public AuthenticationProvider authProvider() { //TODO - fillup Details with the User Entity
	DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
	
	
	provider.setUserDetailsService(userDetailsService);
	provider.setPasswordEncoder(getPasswordEncoder()); 
	return provider;
}



	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
	    final CorsConfiguration config = new CorsConfiguration();

	    config.setAllowedOrigins(Arrays.asList("http://localhost:3001","http://qsolog.de:3001","http://localhost:3000","localhost"));
	    config.setAllowedMethods(Arrays.asList("GET", "POST", "OPTIONS", "DELETE", "PUT", "PATCH"));
	    config.setAllowCredentials(true);
	    config.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));

	    final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    source.registerCorsConfiguration("/**", config);

	    return source;
	}
	
}
