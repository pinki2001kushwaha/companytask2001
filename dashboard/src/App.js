import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainLayout from './pages/MainLayout'; // Main layout file
import Dashboard from './pages/Dashboard'; // Dashboard component
import Prefrom from './components/Prefrom'; // Prefrom component
import Ecommerce from './dashboard/Ecommerce'; // Ecommerce page
import Tables from './dashboard/Tables'; // Tables page
import Login from './dashboard/Login'; 
import Dash from "./components/Dash"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="ecommerce" element={<Ecommerce />} />
            <Route path="tables" element={<Tables />} />
            <Route path="Prefrom" element={<Prefrom />} />
            <Route path="Dash" element={<Dash />} />
            {/* Other dashboard routes */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
