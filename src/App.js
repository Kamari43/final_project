import './App.css';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Budget from "./pages/Budget";
import Tips from "./pages/Tips";
import Form from "./pages/Form";
import {
    BrowserRouter as Router,
    Routes,
    Route,
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
                          <Link className="nav-link active" to="/">Homepage</Link>
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
              <Route path="/form" element={<Form />} />
              <Route path="/tips" element={<Tips />} />
              <Route path="/login" element={<Login />} />
          </Routes>


          <p>If you have any questions or concerns email<br/><br/>
              <a href="mailto:kamariwilliams50@gmail.com">kamariwilliams50@gmail.com</a>
              <p>or</p><a href="mailto:Jonathan1.Burrell@famu.edu">Jonathan1.Burrell@famu.edu</a>
              <p>or</p><a href="mailto:MartheEdme@gmail.com">MartheEdme@gmail.com</a>
              <p>&copy; Copyright 2020. All Rights Reserved.</p>

              <p>Florida A&M University<a href="https://www.famu.edu/">FAMU</a></p> </p>
      </Router>



  );
}

export default App;
