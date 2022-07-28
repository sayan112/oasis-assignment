import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from  './components/Home/home.js';
import Login from './components/IndivisalLogin/login.js';
 import Signup from './components/SignUp/signup.js';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
