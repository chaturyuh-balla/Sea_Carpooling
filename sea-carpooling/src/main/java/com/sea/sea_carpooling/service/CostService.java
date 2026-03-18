package com.sea.sea_carpooling.service;

import org.springframework.stereotype.Service;

@Service
public class CostService {

    public double calculateAmount(double distance,
                                  double fuelPrice,
                                  double mileage,
                                  int passengers){

        double fuelNeeded = distance / mileage;

        double totalFuelCost = fuelNeeded * fuelPrice;

        return totalFuelCost / passengers;
    }
}