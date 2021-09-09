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
import com.maxpumpe.findmypet.model.AppUser;
import com.maxpumpe.findmypet.model.AppUserDetailsService;
import com.maxpumpe.findmypet.model.AppUserRepository;
import com.maxpumpe.findmypet.model.Pet;
import com.maxpumpe.findmypet.model.PetRepository;
import com.maxpumpe.findmypet.model.Role;

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

	@Autowired
	PetRepository petRepo;
	
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
			
			AppUser adminUser = userService.save(new AppUser("test1", "Mustermann", "03047893648732", "test1@mail.de", "password",Role.ADMIN));//ApplicationUserRole.ADMIN
			Pet pet1 = new Pet("Stinktier1 entlaufen", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod te","https://placekitten.com/g/110/110",13.7549540234D,52.1539446233D,adminUser.getId());
			
			
			AppUser custuser =userService.save( new AppUser("test2", "Ernst", "03047893648732", "test2@mail.de", "password", Role.USER));
			Pet pet2 = new Pet("Stinktier2 entlaufen", "Mein lieber stinker2, hat den einer gerochen?","https://placekitten.com/g/110/110",13.7549540332D,52.1539436641D,custuser.getId());
			
			
			AppUser custuser1 = userService.save(new AppUser("test3", "Friedrich", "03047893648732", "test3@mail.de", "password1234", Role.USER));
			Pet pet3 = new Pet("Stinktier3 entlaufen", "Mein lieber stinker3, hat den einer gerochen?","https://placekitten.com/g/110/110",13.7549540536D,52.1539446531D,custuser1.getId());
			

			appUserRepository.save(adminUser);
			appUserRepository.save(custuser);
		    appUserRepository.save(custuser1);
		    
		    petRepo.save(pet1);
		    petRepo.save(pet2);
		    petRepo.save(pet3);
		    
		    System.out.println("created Demo init  Data .......");
		    
		  
		  

		};

	}
}
