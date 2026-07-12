import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "https://backend-2-1s5i.onrender.com/api/user/login",
        {
          email,
          password,
        }
      );

      console.log("Response:", response.data);

      if (!response.data.success) {
        setError(response.data.message);
        return;
      }

      const { token, message } = response.data;
      const role = response.data.role || response.data.user?.role;

      // Save in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      setMessage(message);

      // Role based redirect
    console.log("Role:", role);

if (role?.toLowerCase() == "admin") {
  navigate("/admin/dashboard");
} else {
  navigate("/home");
}
    } catch (err) {
      console.log(err);

      setError(
        err.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Login to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>

        {message && (
          <p className="text-center mt-4 text-green-600 font-semibold">
            {message}
          </p>
        )}

        {error && (
          <p className="text-center mt-4 text-red-600 font-semibold">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;