// MainLayout.js
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'; // Adjust the import path if necessary
import Navbar from '../components/Navbar'; // Adjust the import path if necessary
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-gray-100 mix-h-screen">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
