package com.maxpumpe.findmypet;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.maxpumpe.findmypet.configuration.AppConfig;
import com.maxpumpe.findmypet.configuration.security.ApplicationUserRole;
import com.maxpumpe.findmypet.model.AppUser;
import com.maxpumpe.findmypet.model.AppUserDetailsService;
import com.maxpumpe.findmypet.model.AppUserRepository;
import com.maxpumpe.findmypet.model.Role;
//import com.maxpumpe.findmypet.service.UserService;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableJpaRepositories(basePackageClasses = AppUserRepository.class)
@EnableSwagger2
@SpringBootApplication
public class Application {

	private static final Logger LOGGER = LoggerFactory.getLogger(Application.class);

	@Autowired
	private AppConfig myConfig;

	@Value("${app.greeting}")
	private String greetMsg;

	
	@Autowired
	AppUserDetailsService userService;
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);

	}

	@Bean
	CommandLineRunner commandLineRunner(AppUserRepository appUserRepository) {
		/* TODO: Use Environment Parameter from application.properties */
		System.out.println("using environment: " + myConfig.getEnvironment());
		System.out.println("name: " + myConfig.getName());
		System.out.println("servers: " + myConfig.getServers());
		
		return args -> {
			
			AppUser adminUser = userService.save(new AppUser("Daniel", "Ernst", "03047893648732", "info@dazo.de", "password",Role.ADMIN));//ApplicationUserRole.ADMIN

			AppUser custuser =userService.save( new AppUser("Daniel", "Ernst", "03047893648732", "ernst@dazo.de", "passoword", Role.ADMIN));
			AppUser custuser1 = userService.save(new AppUser("Heike", "Friedrich", "03047893648732", "heike@dazo.de", "password1234", Role.ADMIN));
			System.out.println("create init Demo User");

			appUserRepository.save(adminUser);
			appUserRepository.save(custuser);
		    appUserRepository.save(custuser1);

		};

	}
}
