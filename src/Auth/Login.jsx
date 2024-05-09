import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the registration endpoint
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          email: email,
          password: password,
        }
      );

      // Handle successful registration
      console.log("User registered:", response.data);
      alert("Login successful.");
      navigate("/CreateEmploy");
    } catch (error) {
      // Handle registration errors
      if (error.response) {
        console.error("Login failed:", error.response.data);
        toast.error("Login failed. Please try again.");
      } else {
        console.error("Login failed:", error.message);
        toast.error("Login failed. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
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
              Login
            </button>
          </form>
          <p>Already Have an Account</p>
          <a
            href="/SignUp"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Register
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
