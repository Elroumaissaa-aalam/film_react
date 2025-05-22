import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/about';
import Home from './pages/home/home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
   
      </Routes>
    </>
  );
};

export default App;