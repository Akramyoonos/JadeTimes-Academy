import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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

// Inner app that installs a global click handler to SPA-navigate any internal <a href="/...">
function AppInner() {
  const navigate = useNavigate();

  useEffect(() => {
    const onClick = (e) => {
      // only left clicks
      if (e.defaultPrevented || e.button !== 0) return;

      const a = e.target.closest('a');
      if (!a) return;

      const href = a.getAttribute('href');
      if (!href) return;

      // ignore modifiers / target=_blank / download
      if (a.target === '_blank' || a.hasAttribute('download') || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      // ignore external links, hash, mailto, tel
      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      if (/^https?:\/\//i.test(href) && new URL(href).origin !== window.location.origin) return;

      // only handle same-origin links
      // resolve relative paths to a pathname
      const url = href.startsWith('http') ? new URL(href) : new URL(href, window.location.href);
      const isSameOrigin = url.origin === window.location.origin;
      if (!isSameOrigin) return;

      // if it looks like a file download (has extension) and not just a route, let browser handle
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
    <BrowserRouter basename="/JadeTimes-Academy/">
      <AppInner />
    </BrowserRouter>
 );
}