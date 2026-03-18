import React,{useState} from "react";
import axios from "axios";

function Signup(){

const [user,setUser] = useState({
name:"",
email:"",
password:"",
phone:""
});

const handleChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value});
};

const signup=async()=>{

await axios.post(
"http://localhost:8080/auth/signup",
user
);

alert("Signup Successful");

};

return(

<div className="page-container">

<div className="form-card">

<h2>Signup</h2>

<input name="name" placeholder="Name" onChange={handleChange}/>

<input name="email" placeholder="Email" onChange={handleChange}/>

<input name="password" type="password" placeholder="Password" onChange={handleChange}/>

<input name="phone" placeholder="Phone" onChange={handleChange}/>

<button onClick={signup}>
Signup
</button>

</div>

</div>

);

}

export default Signup;