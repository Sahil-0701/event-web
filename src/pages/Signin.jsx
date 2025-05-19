import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";
import login from "../assets/login.jpg";

const Signin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="flex w-[85%] max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        
        {/* Left: Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-indigo-600 mb-2">Welcome Back 💫</h2>
          <p className="text-gray-500 mb-8">Log in to your trueEvents account</p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition"
            >
              Sign In 🚀
            </button>
          </form>

          <p className="text-sm text-center text-gray-500 mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-indigo-600 hover:text-indigo-700 font-semibold">
              Sign up here
            </Link>
          </p>
        </div>

        {/* Right: Image */}
        <div className="w-1/2">
          <img
            src={login}
            alt="Login Visual"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
