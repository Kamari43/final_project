import './App.css';
import './Main.css';
import './form.css';
import 'bootstrap/dist/css/bootstrap.css';
import GoogleMaps from "./pages/GoogleMaps";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Budget from "./pages/Budget";
import Tips from "./pages/Tips";
import Form from "./pages/Form";
import React from "react"
import axios from "axios";
import SimpleMap from "./pages/GoogleMaps";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link
} from "react-router-dom";

function App() {
  return (
      <Router>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                  <Link className="navbar-brand" to="/">TipNit</Link>
                  <ul className="nav nav-pills card-header-pills">
                      <li className="nav-item">
                          <Link className="nav-link" to="/">Homepage</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/about">About Us</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/budget">Finance Planner</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/tips">Saving Tips</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/form">Comment/Question Page</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/googlemaps">Maps</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/login">Login</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/signup">Signup</Link>
                      </li>
                  </ul>
              </div>
          </nav>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/googlemaps" element={<GoogleMaps />} />
              <Route path="/form" element={<Form />} />
              <Route path="/tips" element={<Tips />} />
              <Route path="/login" element={<Login />} />
          </Routes>


      </Router>



  );
}

export default App;
