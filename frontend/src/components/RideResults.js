import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import BASE_URL from "../api";

function RideResults(){

const location = useLocation();
const ridesData = location.state?.rides || [];

const [rides,setRides] = useState(ridesData);

const joinRide = async (rideId) => {

try{

await axios.put(`${BASE_URL}/rides/join/${rideId}`);

alert("Ride Joined Successfully");

const updatedRides = rides.map((ride)=>{
if(ride.ride_id === rideId){
return {...ride, available_seats: ride.available_seats - 1};
}
return ride;
});

setRides(updatedRides);

}
catch(error){
console.error(error);
}

};

return(

<div className="page-container">

{/* Heading */}
<h2 style={{
textAlign:"center",
marginTop:"20px",
marginBottom:"30px"
}}>
Available Rides
</h2>

{/* Horizontal Scroll Container */}
<div
style={{
display:"flex",
flexDirection:"row",
overflowX:"auto",
gap:"25px",
padding:"20px"
}}
>

{rides.map((ride)=>(

<div
key={ride.ride_id}
className="form-card"
style={{
minWidth:"320px",
flexShrink:0
}}
>

<p><b>{ride.startLocation} → {ride.destination}</b></p>
<p><b>Date:</b> {ride.date}</p>
<p><b>Time:</b> {ride.time}</p>
<p><b>Seats:</b> {ride.available_seats}</p>
<p><b>Cost:</b> ₹{ride.total_amount}</p>

<button
disabled={ride.available_seats === 0}
onClick={()=>joinRide(ride.ride_id)}
>
Join Ride
</button>

</div>

))}

</div>

</div>

);

}

export default RideResults;