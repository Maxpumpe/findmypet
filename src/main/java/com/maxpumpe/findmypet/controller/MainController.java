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
	
	@RequestMapping("/start")
	public String index(Model model) {
		model.addAttribute("title", "Startseite");
		model.addAttribute("content", "Herzlich Willkommen");
		return "standard";
	}
	
//	@RequestMapping("/public")
//	public String doSomethingElse(Model model) {
//		model.addAttribute("title", "Public");
//		model.addAttribute("content", "Alles ganz öffentlich.");
//		return "standard";
//	}
	
	@RequestMapping("/private")
	public String privatePage(Model model) {
		model.addAttribute("title", "Privat");
		model.addAttribute("content", "Ganz geheime Sachen.");
		return "standard";
	}
	
	@GetMapping("/login") // Formular
	public String loginForm(Model model) {
		return "login-form";
	}
	

	
	@RequestMapping("/login_error")
	public String loginError(Model model) {
		model.addAttribute("error", true);
		return "login-form";
	}
	
	@RequestMapping("/logout")
	public String logout(SessionStatus status, HttpSession session) {
		SecurityContextHolder.getContext().setAuthentication(null);
		status.setComplete();
		session.invalidate();
		return "login-form";
	}
	
	@GetMapping("/register") // Formular
	public String registerForm(AppUser user) {
		return "register-form";
	}
	

}