import React from 'react';
import { FiSearch, FiBell, FiLock, FiHeart, FiMenu } from 'react-icons/fi';

function Navbar({ toggleSidebar }) {
  return (
    <div className="flex items-center justify-between bg-white shadow p-4 md:px-6 fixed top-0 left-0 right-0 z-10">
      <button className="text-gray-500 md:hidden" onClick={toggleSidebar}>
        <FiMenu className="text-2xl" />
      </button>
      
    <div className="flex items-center w-full md:w-auto max-w-sm md:flex-grow ">
 
      <div className="flex items-center w-full md:w-auto max-w-sm md:flex-grow " >
   <FiSearch className="text-gray-500 mr-2 "style={{fontSize:"1.5rem"}} />
  <input

    type="text"
    placeholder="Search..."
    className="w-full max-w-xs rounded p-2 text-gray-600 focus:outline-none"
  />
  </div>
</div>

      <div className="flex items-center space-x-4">
        <FiLock className="text-gray-500 text-xl" />
        <FiHeart className="text-gray-500 text-xl relative">
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </FiHeart>
        <FiBell className="text-gray-500 text-xl relative">
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </FiBell>
        <div className="flex items-center space-x-2">
        <img
  src="https://randomuser.me/api/portraits/women/1.jpg"
  alt="User Avatar"
  className="w-8 h-8 rounded-full"
/>


          <div className="hidden md:block">
            <p className="text-sm font-semibold">Thomas Arnee</p>
            <p className="text-xs text-gray-500">UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
