package com.sea.sea_carpooling.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.sea.sea_carpooling.service.CostService;

@RestController
@RequestMapping("/cost")
@CrossOrigin("*")
public class CostController {

    @Autowired
    CostService costService;

    @GetMapping
    public double calculateCost(
            @RequestParam double distance,
            @RequestParam double fuelPrice,
            @RequestParam double mileage,
            @RequestParam int passengers){

        return costService.calculateAmount(distance, fuelPrice, mileage, passengers);
    }

}