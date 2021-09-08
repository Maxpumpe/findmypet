package com.maxpumpe.findmypet.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.maxpumpe.findmypet.model.AppUserDetails;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.crypto.SecretKey;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.Date;

public class JwtUsernameAndPasswordAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

	private final AuthenticationManager authenticationManager;
	// private final JwtConfig jwtConfig;
	// private final SecretKey secretKey;

	public JwtUsernameAndPasswordAuthenticationFilter(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
		// this.jwtConfig = jwtConfig;
		// this.secretKey = secretKey;
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {

		try {
			UsernameAndPasswordAuthenticationRequest authenticationRequest = new ObjectMapper()
					.readValue(request.getInputStream(), UsernameAndPasswordAuthenticationRequest.class);

			// Authentication authentication = new
			// UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
			// authenticationRequest.getPassword());

			// Authentication authenticate =
			// authenticationManager.authenticate(authentication); // check if the user and
			Authentication authentication = new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
					authenticationRequest.getPassword()); // pass exists
			System.out.println("authenticate:" + authentication.toString());
			Authentication authenticate = authenticationManager.authenticate(authentication);

			return authenticate;

		} catch (IOException e) {
			throw new RuntimeException(e);
		}

	}

	/* invoke if only attemptAuthentication succeed and send bacl a Auth Token */
	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		String key = "SECUREKEYMORESECUREKEYMOREUNDJEMEHRDESTOBESSER"; // TODO: implement a random one at installation
																		// of this app
		String token = Jwts.builder().setSubject(authResult.getName()).claim("autorities", authResult.getAuthorities())
				.setIssuedAt(new Date())
				// .setExpiration(java.sql.Date.valueOf(LocalDate.now().plusDays(jwtConfig.getTokenExpirationAfterDays())))
				// //TODO: Ablauf des Token in Tage - setzn in die configuration
				.setExpiration(java.sql.Date.valueOf(LocalDate.now().plusWeeks(2)))
				.signWith(Keys.hmacShaKeyFor(key.getBytes())).compact();

		System.out.println("successfulAuthentication:" + authResult.toString());
		response.addHeader("Authorsation", "Bearer " + token); // TODO: remove - this is only for primitive awt token
																
		Cookie cookie = new Cookie("cookieKey", "cookieValue");

		// expires in 7 days
		cookie.setMaxAge(7 * 24 * 60 * 60);

		// optional properties
		cookie.setSecure(true);
		cookie.setHttpOnly(true);
		cookie.setPath("/");
		response.addCookie(cookie);

		response.setContentType("application/json");

		PrintWriter out = response.getWriter();
		AppUserDetails currentAuthUser = (AppUserDetails) authResult.getPrincipal();
		JsonObject json = new JsonObject();
		json.addProperty("_id", 1);
		json.addProperty("email", authResult.getName());
		json.addProperty("firstName", currentAuthUser.getUser().getFirstname());
		json.addProperty("lastName", currentAuthUser.getUser().getLastname());
		json.addProperty("Name", currentAuthUser.getUser().getAuthcurrentUserName());
	    json.addProperty("token", token); //TODO: Fix that only goes over Header - is a task of reactjs UI
		out.print(json);
		out.flush();

		// response.addHeader(jwtConfig.getAuthorizationHeader(),
		// jwtConfig.getTokenPrefix() + token);
	}
}
