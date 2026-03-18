package com.sea.sea_carpooling.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sea.sea_carpooling.model.User;

public interface UserRepository extends JpaRepository<User,Long>{

User findByEmail(String email);

}