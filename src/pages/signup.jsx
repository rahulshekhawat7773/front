import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://backend-2-1s5i.onrender.com/api/user/register",
        userData
      );

      console.log(response.data);

      setMessage("Registration Successful");

      // input clear
      setName("");
      setEmail("");
      setPassword("");

      // login page redirect
      navigate("/login");

    } catch (error) {
      console.log(error);

      setMessage(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 px-4">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">

        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h2>

       


        <form onSubmit={handleSubmit} className="space-y-5">


          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full border p-3 rounded-xl"
          />


          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border p-3 rounded-xl"
          />


          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border p-3 rounded-xl"
          />


          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-3 rounded-xl"
          >
            Sign Up
          </button>


          <p className="text-center">
            Already have an account?

            <Link
              to="/login"
              className="text-purple-600 ml-2 font-semibold"
            >
              Login
            </Link>

          </p>


        </form>


        {
          message &&
          <p className="text-center mt-4 text-green-600">
            {message}
          </p>
        }


      </div>

    </div>
  );
}


export default Signup;