package com.sea.sea_carpooling.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sea.sea_carpooling.model.Notification;

public interface NotificationRepository extends JpaRepository<Notification,Long>{
}