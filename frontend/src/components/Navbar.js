import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);
const menuRef = useRef(null);

const toggleMenu = () => {
  setMenuOpen(!menuOpen);
};

const logout = () => {
  localStorage.removeItem("user");
  window.location.href="/login";
};

useEffect(()=>{

const handleClickOutside = (event)=>{
if(menuRef.current && !menuRef.current.contains(event.target)){
setMenuOpen(false);
}
};

document.addEventListener("mousedown",handleClickOutside);

return ()=>{
document.removeEventListener("mousedown",handleClickOutside);
};

},[]);

return(

<nav className="navbar">

{/* LEFT */}
<div className="logo">
SEA
</div>



{/* RIGHT */}

<div className="nav-right">

<Link to="/login" className="nav-link">
Login
</Link>

<Link to="/signup" className="nav-link">
Signup
</Link>

<div className="menu-container" ref={menuRef}>

<span className="menu-icon" onClick={toggleMenu}>
⋮
</span>

{menuOpen && (

<div className="dropdown-menu">

<Link to="/searchRide" className="menu-item">
Search Ride
</Link>

<Link to="/createRide" className="menu-item">
Create Ride
</Link>

<Link to="/profile" className="menu-item">
Profile
</Link>

<div className="menu-item logout" onClick={logout}>
Logout
</div>

</div>

)}

</div>

</div>

</nav>

);

}

export default Navbar;