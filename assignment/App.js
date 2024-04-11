// App.js
import React, { useState } from 'react';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // Import BrowserRouter, Route, and Link
import { Routes, Route as Navigate } from 'react-router-dom'; // Import Routes and Route as Navigate
import Form from './form';
import Table from './table';
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);


function App() {
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (data) => {
    setFormData([formData, data]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/table">Table</Link>
            </li>
            <li>
              <Link to="/">Form</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Navigate path="/table" element={<Table data={formData} />} /> {/* Use Navigate instead of Route */}
          <Navigate path="/" element={<Form onSubmit={handleFormSubmit} />} /> {/* Use Navigate instead of Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
