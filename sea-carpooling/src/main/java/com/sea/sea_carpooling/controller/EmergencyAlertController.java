package com.sea.sea_carpooling.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.sea.sea_carpooling.model.EmergencyAlert;
import com.sea.sea_carpooling.repository.EmergencyAlertRepository;
import java.util.List;

@RestController
@RequestMapping("/emergency-alerts")
public class EmergencyAlertController {

    @Autowired
    private EmergencyAlertRepository repository;

    @PostMapping
    public EmergencyAlert create(@RequestBody EmergencyAlert alert){
        return repository.save(alert);
    }

    @GetMapping
    public List<EmergencyAlert> getAll(){
        return repository.findAll();
    }
}