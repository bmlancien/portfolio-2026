import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import HomePage from './pages/HomePage';
import ImprintPage from './pages/ImprintPage';
import PrivacyPage from './pages/PrivacyPage';
import ContactPage from './pages/ContactPage';
import EmpowerPlanPage from './pages/projects/EmpowerPlanPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/imprint" element={<ImprintPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/empowerplan" element={<EmpowerPlanPage />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
