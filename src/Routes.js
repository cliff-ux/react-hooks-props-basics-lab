import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Import your components here

const AppRoutes = () => (
  <Routes>
    {/* Add your routes here */}
    <Route path="/" element={<Home />} />
  </Routes>
);

export default AppRoutes;
