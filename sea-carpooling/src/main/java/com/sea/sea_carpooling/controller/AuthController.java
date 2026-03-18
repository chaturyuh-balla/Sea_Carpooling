package com.sea.sea_carpooling.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.sea.sea_carpooling.model.User;
import com.sea.sea_carpooling.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @PostMapping("/signup")
    public User signup(@RequestBody User user){

        user.setPassword(encoder.encode(user.getPassword()));
        return userRepository.save(user);

    }

    @PostMapping("/login")
    public String login(@RequestBody User user){

        User existingUser = userRepository.findByEmail(user.getEmail());

        if(existingUser != null && encoder.matches(user.getPassword(), existingUser.getPassword())){
            return "Login Successful";
        }

        return "Invalid Credentials";
    }
}