import React from 'react';
import loginBg from '../../assets/Images/Spotlight 03.webp'; // 1. Import the image

const Login = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={loginBg} // 2. Use the imported image variable
        alt="/"
      />

      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full mx-auto bg-white/90 p-8 rounded-lg shadow-lg backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-center py-4 text-gray-800">ADMIN</h2>
          <div className="flex flex-col mb-4">
            <label className="text-gray-700">Username</label>
            <input className="border-b-2 relative bg-transparent p-2 focus:outline-none focus:border-indigo-600" type="text" />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Password</label>
            <input
              className="border-b-2 relative bg-transparent p-2 focus:outline-none focus:border-indigo-600"
              type="password"
            />
          </div>
          <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white rounded-lg shadow-md">
            Sign In
          </button>
          <p className="flex items-center mt-4 text-gray-700">
            <input className="mr-2" type="checkbox" />
            Remember Me
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;