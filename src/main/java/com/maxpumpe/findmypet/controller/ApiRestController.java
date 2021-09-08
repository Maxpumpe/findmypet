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
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;

import com.maxpumpe.findmypet.configuration.AppConfig;
import com.maxpumpe.findmypet.configuration.natsConfig;
import com.maxpumpe.findmypet.model.AppUser;
import com.maxpumpe.findmypet.model.AppUserRepository;



import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/v1")
@RequiredArgsConstructor
public class ApiRestController {

	private static final Logger log = Logger.getLogger(ApiRestController.class.getName());
	HttpServletRequest request;



	@Autowired
	private AppUserRepository repo;

	@Autowired
	private AppConfig myConf;
	@Autowired
	private natsConfig natsConf;



	@GetMapping("/test")
	public String greeting() {
		System.out.println(myConf.getName());
		return myConf.getName();
	}

	@GetMapping("/natstest")
	public String natsvars() {
		System.out.println(natsConf.getServer());
		return natsConf.getServer();
	}



	@ResponseStatus(code = HttpStatus.OK)
	@RequestMapping(value = "/register", consumes = "application/json", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Map<String, String> register(@Valid @RequestBody AppUser user, BindingResult result) {

		Optional<AppUser> existsUser = this.repo.findByEmail(user.getEmail());
		if (existsUser != null) {

			System.out.println("user exists" + existsUser.toString());
			return Collections.singletonMap("User", "exists"); // Change this to dynamic Exception Response Status
		}

		if (user != null) {
			log.info("Inside addIssuer, adding: " + user.toString());
		} else {
			log.info("Inside addIssuer...");
			Collections.singletonMap("success", "exists");
		}

		if (result.hasErrors()) {
			log.info("wrong Attr");
			System.out.println(user.toString());
			Collections.singletonMap("success", "false");
		}

		
		
		// Kein Fehler
		//try {
	//		userService.save(user);
	//	} catch (Exception e) {
	//		Collections.singletonMap("success", "false");
	//	}
		return Collections.singletonMap("success", "true");

	}
	
	
	//   @GetMapping
	 //   @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_MANAGER')")
	 //   public List<AppUser> getAllUser() {
	 //       System.out.println("getAll");
	 //       return AppUser;
	 //   }

}
