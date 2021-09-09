package com.maxpumpe.findmypet.model;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PetService {
	

	
	@Autowired
	private PetRepository repo;
	
	


	public Iterable<Pet> getPetList() {
		//return Collections.unmodifiableList(Pet);
		return repo.findAll();
	}

	public void addPet(Pet pet) {
		
		repo.save(pet);
	}

	public void remove(long id) {
		repo.deleteById(id);
	}
	
	public Optional<Pet> get(long id) {
		return repo.findById(id);
	}
}