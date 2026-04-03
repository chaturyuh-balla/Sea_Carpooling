import React,{useState} from "react";
import axios from "axios";
import BASE_URL from "../api";

function CreateRide(){

const [ride,setRide]=useState({
startLocation:"",
destination:"",
date:"",
time:"",
available_seats:"",
distance:"",
fuel_cost:"",
mileage:""
});

const handleChange=(e)=>{
setRide({...ride,[e.target.name]:e.target.value});
};

const createRide=async()=>{

try{

await axios.post(
`${BASE_URL}/rides`,
ride
);

alert("Ride Created");

}
catch(error){
console.error(error);
}

};

return(

<div className="page-container">

<div className="form-card">

<h2>Create Ride</h2>

<input
name="startLocation"
placeholder="Start Location"
onChange={handleChange}
/>

<input
name="destination"
placeholder="Destination"
onChange={handleChange}
/>

<input
type="date"
name="date"
onChange={handleChange}
/>

<input
type="time"
name="time"
onChange={handleChange}
/>

<input
name="available_seats"
placeholder="Seats"
onChange={handleChange}
/>

<input
name="distance"
placeholder="Distance (km)"
onChange={handleChange}
/>

<input
name="fuel_cost"
placeholder="Fuel Price (₹ per litre)"
onChange={handleChange}
/>

<input
name="mileage"
placeholder="Mileage (km per litre)"
onChange={handleChange}
/>

<button onClick={createRide}>
Create Ride
</button>

</div>

</div>

);

}

export default CreateRide;