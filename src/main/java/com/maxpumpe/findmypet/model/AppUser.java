package com.maxpumpe.findmypet.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import javax.validation.constraints.Size;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity() @Data @NoArgsConstructor @AllArgsConstructor
@Table(
        name = "AppUser",
        uniqueConstraints = {
                @UniqueConstraint(name = "appuser_email_unique", columnNames = "email")
        }
)
public class AppUser implements Serializable  {
	

	private static final long serialVersionUID = 1L;

	@Id
	    @SequenceGenerator(
	            name = "appuser_sequence",
	            sequenceName = "appuser_sequence",
	            allocationSize = 1
	    )
	    @GeneratedValue(
	            strategy = GenerationType.SEQUENCE,
	            generator = "appuser_sequence"
	    )
	    @Column(
	            name = "id",
	            updatable = false
	    )
	private Long id;
	
	private String userName;
	
	
	@NotNull
	@Size(min = 2, max = 25)
	@Column(length = 25)
	private String firstName;
	
	@NotNull
	@Size(min = 2, max = 25)
	@Column(length = 25)
	private String lastName;
	
	
	 @Column(name = "email",nullable = false,length=80)
	private String email;
	
	//@JsonIgnore // Eigenschaft wird bei der Ausgabe als JSON ignoriert
	@NotNull
	@Size(min = 6, max = 100)
	@Column(length = 100)
	private String password;
	


	@Column(length = 100, unique = false)
	private String telefone;
	
	//@Enumerated(EnumType.STRING)
	//private ApplicationUserRole roles = ApplicationUserRole.USER;
	
	@Enumerated(EnumType.STRING)
	private Role role = Role.USER;
	private boolean active;

	
	//@ManyToMany(fetch = FetchType.EAGER)
	//private Collections<AppRole> roles = new ArrayList<>();


//Methods
	
	public AppUser() {}
	public AppUser(
			              
			@NotNull @Size(min = 2, max = 25) String firstName,
										      String lastName,
			@Null							  String telefone,
			@NotNull @Email                   String email,
			@NotNull @Size(min = 6, max = 100)String password,
											   Role role
			) {
		super();
	
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.telefone = telefone;
		this.password = password;
		this.role = role;
	}



	

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getFirstname() {
		return firstName;
	}
	public void setFirstname(String firstname) {
		this.firstName = firstname;
	}
	public String getLastname() {
		return lastName;
	}
	public void setLastname(String lastname) {
		this.lastName = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}


	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}

	public Role getRoles() {
		return role;
	}
	public void setRoles(Role role) {
		this.role = role;
	}
	
	public String getAuthcurrentUserName() {
		return firstName + " " + lastName;
	}
	
	@Override
	public String toString() {
		return "AppUser [id=" + id + ", firstname=" + firstName + ", lastname=" + lastName + ", email=" + email
				+ ", password=" + password + ", telefone=" + telefone + ", roles=" + role+ "]";
	}

	
	
	
}