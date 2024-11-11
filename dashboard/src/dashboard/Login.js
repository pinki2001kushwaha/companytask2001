import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginuser = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const data = { userid, password };

    try {
      const result = await axios.post('http://localhost:9000/userlogin', data);
      console.log(result); // Consider more robust handling of the result
      navigate('/dashboard'); // Adjusted for clarity
    } catch (error) {
      console.error(error); // Consider adding user feedback for login errors
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg w-11/12 md:w-96 p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign In</h2>
        <form onSubmit={loginuser}>
          <div className="mb-4">
            <label htmlFor="id" className="block text-gray-700 mb-1">User ID</label>
            <input
              type="text"
              id="id"
              placeholder="Enter your UserID"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              value={userid}
              onChange={(e) => setUserid(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="h-4 w-4 text-black border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">Remember me</label>
            </div>
            <a href="#" className="text-sm text-black hover:underline">Forgot Password?</a>
          </div>
          <div className="flex justify-between">
            <button
              type="submit" // Changed to submit type for proper form handling
              className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-200"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Password suggestions <a href="#" className="text-black hover:underline">Click Here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
