import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';

import HomePage from './pages/HomePage/HomePage';
import InfoPage from './pages/InfoPage/InfoPage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<InfoPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
