package com.maxpumpe.findmypet.controller;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;

import com.maxpumpe.findmypet.configuration.AppConfig;
import com.maxpumpe.findmypet.configuration.natsConfig;
import com.maxpumpe.findmypet.model.AppUser;
import com.maxpumpe.findmypet.model.AppUserDetailsService;
import com.maxpumpe.findmypet.model.AppUserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("login/auth")
@RequiredArgsConstructor
public class LoginRestController {

	private static final Logger log = Logger.getLogger(ApiRestController.class.getName());
	HttpServletRequest request;

	@Autowired
	private AppUserRepository repo;
	@Autowired
	private AppUserDetailsService userService;

	@Autowired
	private AppConfig myConf;
	@Autowired
	private natsConfig natsConf;

	@ResponseStatus(code = HttpStatus.OK)
	@RequestMapping(value = "register", consumes = "application/json", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Map<String, String> register(@Valid @RequestBody AppUser user, BindingResult result) {
		System.out.println("BindingResult:" + user.toString());
		
		Optional<AppUser> existsUser = this.repo.findByEmail(user.getEmail());
		
		System.out.println("existsUser" + existsUser);
		if (! existsUser.isEmpty()) {

			System.out.println("user exists" + existsUser.toString());
			return Collections.singletonMap("User", "exists"); // Change this to dynamic Exception Response Status
		}



		if (result.hasErrors()) {
			log.info("wrong Attr");
			System.out.println("hasErrors" + user.toString());
			Collections.singletonMap("success", "false");
		}

		// Kein Fehler
		 try {
			 userService.save(user);
		 } catch (Exception e) {
		 Collections.singletonMap("success", "false");
		 }
		return Collections.singletonMap("data", user.getEmail()); //TODO: Sendback the email adress to auto login with awt token -currently buggy on UI side

	}

}
