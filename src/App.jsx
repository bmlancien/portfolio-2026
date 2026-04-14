import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import HomePage from './pages/HomePage';
import ImprintPage from './pages/ImprintPage';
import PrivacyPage from './pages/PrivacyPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import EmpowerPlanPage from './pages/projects/EmpowerPlanPage';
import ReEnActPage from './pages/projects/ReEnActPage';
import WWFPage from './pages/projects/WWFPage';
import LocaliserPage from './pages/projects/LocaliserPage';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/imprint" element={<ImprintPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects/epp" element={<EmpowerPlanPage />} />
            <Route path="/projects/wwf-germany" element={<WWFPage />} />
            <Route path="/projects/reenact" element={<ReEnActPage />} />
            <Route path="/projects/localiser" element={<LocaliserPage />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
