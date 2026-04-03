import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import BASE_URL from "../api";
function SearchRide(){

const [startLocation,setStartLocation] = useState("");
const [destination,setDestination] = useState("");

const navigate = useNavigate();

const searchRide = async ()=>{

try{

const res = await axios.get(
`${BASE_URL}/rides/search?startLocation=${startLocation}&destination=${destination}`
);

navigate("/results",{state:{rides:res.data}});

}
catch(error){
console.error(error);
}

};

return(

<div className="page-container">

<div className="form-card">

<h2>Search Ride</h2>

<input
type="text"
placeholder="Start Location"
value={startLocation}
onChange={(e)=>setStartLocation(e.target.value)}
/>

<input
type="text"
placeholder="Destination"
value={destination}
onChange={(e)=>setDestination(e.target.value)}
/>

<button onClick={searchRide}>
Search Ride
</button>

</div>

</div>

);

}

export default SearchRide;