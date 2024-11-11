// Sidebar.js
import React, { useState } from 'react';
import { FcBarChart } from "react-icons/fc";
import { MdOutlineDashboard, MdOutlineMessage, MdOutlineInbox, MdOutlineDescription } from "react-icons/md";
import { BsTable } from "react-icons/bs";
import { AiOutlineForm, AiOutlineSetting } from "react-icons/ai";
import { FiMail, FiX } from "react-icons/fi";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
  const [expandedSection, setExpandedSection] = useState(null);
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 bg-gray-800 text-white w-64 p-5 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:static md:block min-h-screen`}
      style={{overflow:"scroll"}}
    >
      <h2 className="text-xl font-bold flex items-center mb-5">
        <FcBarChart className="mr-2" /> Bagisto
      </h2>

      <button
        className="absolute top-4 right-4 text-white text-2xl md:hidden"
        onClick={toggleSidebar}
      >
        <FiX />
      </button>

      <ul className="space-y-4">
        {/* Dashboard Section */}
        <li
          className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer"
          onClick={() => toggleSection('dashboard')}
        >
          <MdOutlineDashboard className="mr-2" /> <span>Dashboard</span>
          {expandedSection === 'dashboard' ? (
            <CgChevronUp className="ml-auto" />
          ) : (
            <CgChevronDown className="ml-auto" />
          )}
        </li>
        {expandedSection === 'dashboard' && (
          <ul className="pl-8 space-y-2 mt-2 transition-all duration-300 ease-in-out">
            <li
              className="py-1 cursor-pointer hover:bg-gray-700 rounded"
              onClick={() => navigate('/dashboard/Dash')}
            >
              eCommerce
            </li>
            <li
              className="py-1 cursor-pointer hover:bg-gray-700 rounded"
              onClick={() => navigate('/dashboard/overview')}
            >
              Overview
            </li>
            <li
              className="py-1 cursor-pointer hover:bg-gray-700 rounded"
              onClick={() => navigate('/dashboard/analytics')}
            >
              Analytics
            </li>
            <li
              className="py-1 cursor-pointer hover:bg-gray-700 rounded"
              onClick={() => navigate('/dashboard/reports')}
            >
              Reports
            </li>
          </ul>
        )}

        {/* Forms Section */}
        <li
          className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer"
          onClick={() => toggleSection('forms')}
        >
          <AiOutlineForm className="mr-2" /> <span>Forms</span>
          {expandedSection === 'forms' ? (
            <CgChevronUp className="ml-auto" />
          ) : (
            <CgChevronDown className="ml-auto" />
          )}
        </li>
        {expandedSection === 'forms' && (
          <ul className="pl-8 space-y-2 mt-2 transition-all duration-300 ease-in-out">
            <li
              className="py-1 cursor-pointer hover:bg-gray-700 rounded"
              onClick={() => navigate('/dashboard/Prefrom')}
            >
              Form Elements
            </li>
            <li
              className="py-1 cursor-pointer hover:bg-gray-700 rounded"
              onClick={() => navigate('/dashboard/form-layout')}
            >
              Form Layout
            </li>
          </ul>
        )}

        {/* Tables Section */}
        <li
          className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer"
          onClick={() => toggleSection('tables')}
        >
          <BsTable className="mr-2" /> <span>Tables</span>
          {expandedSection === 'tables' ? (
            <CgChevronUp className="ml-auto" />
          ) : (
            <CgChevronDown className="ml-auto" />
          )}
        </li>
        {expandedSection === 'tables' && (
          <ul className="pl-8 space-y-2 mt-2 transition-all duration-300 ease-in-out">
            <li
              className="py-1 cursor-pointer hover:bg-gray-700 rounded"
              onClick={() => navigate('/dashboard/Tables')}
            >
              Basic Tables
            </li>
            <li className="py-1 cursor-pointer hover:bg-gray-700 rounded">
              Data Tables
            </li>
          </ul>
        )}

        {/* Pages Section */}
        <li
          className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer"
          onClick={() => toggleSection('pages')}
        >
          <AiOutlineSetting className="mr-2" /> <span>Pages</span>
          {expandedSection === 'pages' ? (
            <CgChevronUp className="ml-auto" />
          ) : (
            <CgChevronDown className="ml-auto" />
          )}
        </li>
        {expandedSection === 'pages' && (
          <ul className="pl-8 space-y-2 mt-2 transition-all duration-300 ease-in-out">
            <li className="py-1 cursor-pointer hover:bg-gray-700 rounded">
              Login
            </li>
            <li className="py-1 cursor-pointer hover:bg-gray-700 rounded">
              Register
            </li>
          </ul>
        )}

        {/* Support Section */}
        <li
          className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer"
          onClick={() => toggleSection('support')}
        >
          <MdOutlineMessage className="mr-2" /> <span>Messages</span>
          {expandedSection === 'support' ? (
            <CgChevronUp className="ml-auto" />
          ) : (
            <CgChevronDown className="ml-auto" />
          )}
        </li>
        {expandedSection === 'support' && (
          <ul className="pl-8 space-y-2 mt-2 transition-all duration-300 ease-in-out">
            <li className="py-1 cursor-pointer hover:bg-gray-700 rounded">
              Inbox
            </li>
            <li className="py-1 cursor-pointer hover:bg-gray-700 rounded">
              Invoice
            </li>
          </ul>
        )}

        {/* Additional Sections */}
        <li className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
          <FiMail className="mr-2" /> <span>Other</span>
        </li>
        <li className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
          <MdOutlineInbox className="mr-2" /> <span>UI Elements</span>
        </li>
        <li className="flex items-center py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
          <MdOutlineDescription className="mr-2" /> <span>Authentication</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
