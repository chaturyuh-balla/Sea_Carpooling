import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import BASE_URL from "../api";
function Login(){

const navigate = useNavigate();

const [user,setUser] = useState({
email:"",
password:""
});

const handleChange = (e)=>{
setUser({...user,[e.target.name]:e.target.value});
};

const login = async ()=>{

const res = await axios.post(
`${BASE_URL}/auth/login`,
user
);

alert(res.data);

if(res.data==="Login Successful"){
navigate("/searchRide");
}

};

return(

<div className="page-container">

<div className="form-card">

<h2>Login</h2>

<input
name="email"
placeholder="Email"
onChange={handleChange}
/>

<input
name="password"
placeholder="Password"
type="password"
onChange={handleChange}
/>

<button onClick={login}>
Login
</button>

<p style={{marginTop:"15px"}}>

New User? <Link to="/signup">Signup</Link>

</p>

</div>

</div>

);

}

export default Login;