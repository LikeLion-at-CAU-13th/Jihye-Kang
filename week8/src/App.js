import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.jsx';

import HomePage from './pages/HomePage/HomePage.jsx';
import InfoPage from './pages/InfoPage/InfoPage.jsx';
import ContactPage from './pages/ContactPage/ContactPage.jsx';

function App() {

  console.log('HomePage:', HomePage);
  console.log('InfoPage:', InfoPage);
  console.log('ContactPage:', ContactPage);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<InfoPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
