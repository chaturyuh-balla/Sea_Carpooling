package com.sea.sea_carpooling.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sea.sea_carpooling.model.EmergencyAlert;

public interface EmergencyAlertRepository extends JpaRepository<EmergencyAlert,Long>{
}