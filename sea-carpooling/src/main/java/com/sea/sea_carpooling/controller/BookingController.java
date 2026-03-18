package com.sea.sea_carpooling.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.sea.sea_carpooling.model.Booking;
import com.sea.sea_carpooling.repository.BookingRepository;
import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking){
        return bookingRepository.save(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings(){
        return bookingRepository.findAll();
    }
}