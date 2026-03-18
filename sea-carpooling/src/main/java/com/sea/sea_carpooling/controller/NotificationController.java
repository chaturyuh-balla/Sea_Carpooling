package com.sea.sea_carpooling.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.sea.sea_carpooling.model.Notification;
import com.sea.sea_carpooling.repository.NotificationRepository;
import java.util.List;

@RestController
@RequestMapping("/notifications")
public class NotificationController {

    @Autowired
    private NotificationRepository repository;

    @PostMapping("/notify")
    public Notification sendNotification(@RequestBody Notification notification){
        return repository.save(notification);
    }

    @GetMapping
    public List<Notification> getAll(){
        return repository.findAll();
    }
}