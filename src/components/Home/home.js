import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import logo from "../Home/backgroundlogo.jpeg";
import polygon1 from "../Home/polygon1.png";
import arrow from "../Home/arrow.png";
import polygon2 from "../Home/polygon2.png";

const Home = (props) => {
  return (
    <div>
      <div class="split left">
        <img className="logo" title="m" src={logo} alt="blank" />
      </div>

      <div class="split right">
        <div className="headersignup">
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign In</Link>
            </span>
          </p>
        </div>

        <div className="content">
          <h2 className="join"> Join Us!</h2>
          <p className="note">
            To begin this journey, tell us what type of account you’d be
            opening.
          </p>
          <div className="middle">
            <img src={polygon1} alt="blank" />
            <div className="middle-center">
              <h3>Individual</h3>
              <p>Personal account to manage all you activities.</p>
            </div>
            <span>
              <Link to="/login">
                {<img src={arrow} className="arrow" alt="blank" />}
              </Link>
            </span>
          </div>
          <div className="middle-1">
            <img src={polygon2} alt="blank" />
            <div className="middle-center-1">
              <h3>Business</h3>
              <p>Own or belong to a company, this is for you.</p>
            </div>
            <span>
              <Link to="/login">
                {<img src={arrow} className="arrow" alt="blank" />}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
