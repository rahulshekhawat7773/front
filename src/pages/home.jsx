import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-600">
        Rahul<span className="text-sky-800">Shekhawat</span>
        </h1>

        <div className="flex gap-6 items-center">
          <Link
            to="/"
            className="text-gray-700 hover:text-purple-600"
          >
            Home
          </Link>

          <Link
            to="/"
            className="text-gray-700 hover:text-purple-600"
          >
            About
          </Link>

          <Link
            to="/"
            className="text-gray-700 hover:text-purple-600"
          >
            Login
          </Link>

          <Link
            to="/"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Signup
          </Link>
        </div>
      </nav>


      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">

        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome
        </h2>

      </div>

    </div>
  );
}

export default Home;