package com.maxpumpe.findmypet.model;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PetRepository extends CrudRepository<Pet, Long> {


	Iterable<Pet> findAll();

	Optional<Pet> findById(long id);



}
