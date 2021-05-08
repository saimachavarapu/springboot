package com.cts.training.resource;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.cts.training.bean.Skills;
import com.cts.training.exception.UserNotFoundException;
import com.cts.training.repository.UserRespository;

@RestController
@RequestMapping("/api")
public class UserResource {
	
	@Autowired
	private UserRespository userRepository;
	//http://localhost:8082/api/users
	@GetMapping("/skills")
	public List<Skills> getAllUsers(){
		return userRepository.findAll();
	}
	
	@GetMapping("/skills/{id}")
	public Optional<Skills> getSkillsById(@PathVariable Long id) {
		  Optional<Skills> user = userRepository.findById(id);
	        if(!user.isPresent())
	        {
	            throw new UserNotFoundException("The user with id - "+id+ " does not exists");
	        }
	            return user; 
	                
	    }
		//return userRepository.findById(id);
	
	
	@GetMapping("/skills/level/{level}")
	public ResponseEntity<List<Skills>> getSkillsByLevel(@PathVariable String level) {
		List<Skills> user=userRepository.findByLevel(level);
		return new ResponseEntity<>(user, HttpStatus.FOUND);
	}

	@DeleteMapping("/skills/{id}")
	public void delete(@PathVariable Long id) {
		userRepository.deleteById(id);
	}
	 @PostMapping("/skills")
	    public Skills createUser(@Valid @RequestBody Skills user) {
	       Skills savedUser = userRepository.save(user);
	       return  savedUser;
	   }
	 
	 @PutMapping("/skills/{id}")
	 public ResponseEntity<Object> updateUser(@Valid @RequestBody Skills user, @PathVariable Long id){
		 userRepository.save(user);
		 return ResponseEntity.noContent().build();
	 }
	 
}
