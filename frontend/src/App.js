import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateRide from "./pages/CreateRide";
import SearchRide from "./pages/SearchRide";
import Profile from "./pages/Profile";
import RideResults from "./components/RideResults";

import "./styles/App.css";

function App() {
  return (
    <Router>

      <Navbar />

      <div className="main-content">

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/createRide" element={<CreateRide />} />
          <Route path="/searchRide" element={<SearchRide />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/results" element={<RideResults />} />
        </Routes>

      </div>

      <Footer />

    </Router>
  );
}

export default App;