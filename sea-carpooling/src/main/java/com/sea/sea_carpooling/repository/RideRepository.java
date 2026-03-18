package com.sea.sea_carpooling.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sea.sea_carpooling.model.Ride;
import java.util.List;

public interface RideRepository extends JpaRepository<Ride, Long> {

    List<Ride> findByStartLocationIgnoreCaseAndDestinationIgnoreCase(String startLocation, String destination);

}