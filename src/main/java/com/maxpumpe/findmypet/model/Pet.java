package com.maxpumpe.findmypet.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


@Table(name = "Pets")
@Entity

public class Pet implements Serializable  {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	private Integer id;
	
	@Column(length = 40)
	private String title;
	
	@Column( nullable = false, updatable = false)
	@CreationTimestamp
	Date createDate;
}


