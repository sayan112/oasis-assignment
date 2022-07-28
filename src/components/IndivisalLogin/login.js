import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import logo from "../Home/backgroundlogo.jpeg";
import backarrow from "../Home/backarrow.png";
import registerbtn from "../Home/register.png";

const Login = () => {
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  };

  return (
    <div>
      <div class="split left">
        <img className="logo" title="m" src={logo} alt="blank" />
      </div>

      <div class="split right">
        <div className="header">
          <div className="back">
            <p>Back</p>
            <Link to="/">
              {<img src={backarrow} className="backarrow" alt="blank" />}
            </Link>
          </div>

          <div className="steps">
            <h4>step01/03</h4>
            <p>Personal Info </p>
          </div>
        </div>
        <div className="mid-content">
          <h3>Register Individual Account!</h3>
          <p>
            For the purpose of industry regulation, your details are required.
          </p>
        </div>

        <div className="register">
          <div className="container">
            <div className="innerBox">
              <h5>Your fullname*</h5>
              <input label="Name" placeholder="Enter your name" />
              <h5>Email address*</h5>
              <input label="Email" placeholder="Enter email address" />
              <h5>Create password*</h5>
              <input label="Password" placeholder="Enter password" />
              <div className="newcheckbox">
                <input type="checkbox" id="agree" onChange={checkboxHandler} />
                <label htmlFor="agree">
                  {" "}
                  I agree to <b>terms and conditions</b>
                </label>
              </div>
              <div className="registerdiv">
                <button className="register">{<img  src={registerbtn} alt='blank' className="registerbtnk"/>}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
