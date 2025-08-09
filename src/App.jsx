import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home_page from './pages/Home_page';
import About_page from './pages/About_page';
import Programfinder_page from './pages/Programfinder_page';
import Admissions_page from './pages/Admissions_page';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Contact_Us from './pages/Contact_Us';
import Alumni from './pages/Alumni';
import StudentResources from './pages/StudentResources';
import DegreeProgramsPage from './pages/DegreeProgramsPage';
import OnlineProgrames from './pages/OnlineProgrames';
import CareerAndAlumniServices from './pages/CareerAndAlumniServices';

function ConditionalHeader() {
  const location = useLocation();
  return location.pathname !== '/events' ? <Header /> : null;
}

// Global click interceptor so ANY <a href="/..."> in header/footer/body routes via SPA
function AppInner() {
  const navigate = useNavigate();

  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0) return; // left-click only
      const a = e.target.closest('a');
      if (!a) return;

      const href = a.getAttribute('href');
      if (!href) return;

      // ignore new-tab/download/modifier/external/hash/mail/tel
      if (a.target === '_blank' || a.hasAttribute('download') || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      if (/^https?:\/\//i.test(href) && new URL(href).origin !== window.location.origin) return;

      const url = href.startsWith('http') ? new URL(href) : new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;

      // If it looks like a file path (ends with extension), let browser handle
      if (/\.[a-z0-9]+($|\?)/i.test(url.pathname)) return;

      e.preventDefault();
      navigate(url.pathname + url.search + url.hash);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);

  return (
    <>
      <ConditionalHeader />
      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/"                              element={<Home_page />} />
          <Route path="/about"                         element={<About_page />} />
          <Route path="/programfinder/*"               element={<Programfinder_page />} />
          <Route path="/admissions"                    element={<Admissions_page />} />
          <Route path="/blog/*"                        element={<Blog />} />
          <Route path="/events/*"                      element={<Events />} />
          <Route path="/contact_us"                    element={<Contact_Us />} />
          <Route path="/alumni"                        element={<Alumni />} />
          <Route path="/StudentResources"              element={<StudentResources />} />
          <Route path="/DegreeProgramsPage/*"          element={<DegreeProgramsPage />} />
          <Route path="/OnlineProgrames/*"             element={<OnlineProgrames />} />
          <Route path="/CareerAndAlumniServices/*"     element={<CareerAndAlumniServices />} />
          <Route path="*"                              element={<Home_page />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}