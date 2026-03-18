package com.sea.sea_carpooling.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sea.sea_carpooling.model.Ride;
import com.sea.sea_carpooling.repository.RideRepository;
import com.sea.sea_carpooling.service.CostService;

import java.util.List;

@RestController
@RequestMapping("/rides")
@CrossOrigin("*")
public class RideController {

    @Autowired
    private RideRepository rideRepository;

    @Autowired
    private CostService costService;

    @PostMapping
    public Ride createRide(@RequestBody Ride ride){

        double totalAmount = costService.calculateAmount(
                ride.getDistance(),
                ride.getFuel_cost(),
                ride.getMileage(),
                ride.getAvailable_seats() + 1
        );

        ride.setTotal_amount(totalAmount);

        return rideRepository.save(ride);
    }

    @GetMapping
    public List<Ride> getAllRides(){
        return rideRepository.findAll();
    }

    @GetMapping("/search")
    public List<Ride> searchRide(
            @RequestParam String startLocation,
            @RequestParam String destination){

        return rideRepository
                .findByStartLocationIgnoreCaseAndDestinationIgnoreCase(startLocation,destination);
    }

    @PutMapping("/join/{rideId}")
    public Ride joinRide(@PathVariable Long rideId){

        Ride ride = rideRepository.findById(rideId).orElse(null);

        if(ride != null && ride.getAvailable_seats() > 0){

            ride.setAvailable_seats(ride.getAvailable_seats() - 1);

            return rideRepository.save(ride);
        }

        return null;
    }
}