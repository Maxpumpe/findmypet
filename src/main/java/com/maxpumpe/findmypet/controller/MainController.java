package com.maxpumpe.findmypet.controller;

import java.util.Map;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.support.SessionStatus;

import com.maxpumpe.findmypet.model.AppUser;
import com.maxpumpe.findmypet.model.AppUserRepository;
import com.maxpumpe.findmypet.repository.UserRepo;

@Controller // Ausgabe erfolgt immer in HTML oder anderen Browser-Kompatiblen-Typen
public class MainController {
	
	private static final Logger log = Logger.getLogger(MainController.class.getName());
	

	
	@Autowired
	private AppUserRepository repo;
	
//	@Autowired
//	private HttpSession session;
	
	@RequestMapping("/")
	public String index(Model model) {

		return "index";
	}
	

	

}