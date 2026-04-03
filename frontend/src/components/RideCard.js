import React from "react";
import axios from "axios";
import BASE_URL from "../api";

function RideCard({ride}) {

  const joinRide = async () => {

    await axios.post(
      `${BASE_URL}/bookings`,
      {
        ride_id: ride.ride_id,
        user_id: 1
      }
    );

    alert("Ride Joined");

  };

  return (

    <div style={{border:"1px solid black", margin:"10px", padding:"10px"}}>

      <p>{ride.startLocation} → {ride.destination}</p>

      <p>Date: {ride.date}</p>

      <p>Seats: {ride.available_seats}</p>

      <p>Cost: {ride.total_amount}</p>

      <button onClick={joinRide}>Join Ride</button>

    </div>

  );

}

export default RideCard;