import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Make a POST request to the registration endpoint
      const response = await axios.post("http://localhost:8080/api/v1/auth/register", {
        name: name,
        email: email,
        password: password
      });
  
      // Handle successful registration
      console.log("User registered:", response.data);
     alert("Registration successful. You can now login.");
      navigate("/login");
    } catch (error) {
      // Handle registration errors
      if (error.response) {
        console.error("Registration failed:", error.response.data);
        toast.error("Registration failed. Please try again.");
      } else {
        console.error("Registration failed:", error.message);
        toast.error("Registration failed. Please try again.");
      }
    }
  };
  

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              autoComplete="off"
              className="form-control rounded-0"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="form-control rounded-0"
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
        </form>
        <p>Already Have an Account</p>
        <a href="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Login
        </a>
      </div>
    </div>
  );
};

export default Signup;
