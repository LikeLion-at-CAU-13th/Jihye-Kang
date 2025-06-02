import React from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Home from './pages/HomePage/HomePage';
import Info from './pages/InfoPage';
import Contact from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
