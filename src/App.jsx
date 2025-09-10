import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

import Header from './components/Home/Header';
import Footer from './components/Home/Footer';

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
import FacultyDirectoryPage from './pages/FacultyDirectoryPage';
import StudentResource_page from './pages/StudentResource_page';
import History_Page from './pages/History_Page';
import ScholarshipAndGrants_page from './pages/ScholarshipAndGrants_page';
import PrivacyPolicy_Page from './pages/PrivacyPolicy_Page';
import Membership_Page from './pages/Membership_Page';
import RequestInfo_Page from './pages/RequestInfo_Page';
import ApplyNyfa_Page from './pages/ApplyNyfa_Page';
import MissionAndPurpose_Page from './pages/MissionAndPurpose_Page';
import VisitUs_Page from './pages/VisitUs_Page';
import Accreditation_Page from './pages/Accreditation_Page';
import AdmissionRequirements_Page from './pages/AdmissionRequirements_Page';

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
      <Header />
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
          <Route path="/FacultyDirectoryPage/*"        element={<FacultyDirectoryPage />} />
          <Route path="/StudentResource_page/*"        element={<StudentResource_page />} />
          <Route path="/History_Page/*"                element={<History_Page />} />
          <Route path="/ScholarshipAndGrants_page/*"   element={<ScholarshipAndGrants_page />} />
          <Route path="/ScholarshipAndGrants_page/*"   element={<ScholarshipAndGrants_page />} />
          <Route path="/PrivacyPolicy_Page/*"           element={<PrivacyPolicy_Page />} />
          <Route path="/Membership_Page/*"               element={<Membership_Page />} />
          <Route path="/RequestInfo_Page/*"               element={<RequestInfo_Page />} />
          <Route path="/ApplyNyfa_Page/*"               element={<ApplyNyfa_Page />} />
          <Route path="/MissionAndPurpose_Page/*"      element={<MissionAndPurpose_Page />} />
          <Route path="/VisitUs_Page/*"                element={<VisitUs_Page />} />
          <Route path="/Accreditation_Page/*"          element={<Accreditation_Page />} />
          <Route path="/AdmissionRequirements_Page/*"  element={<AdmissionRequirements_Page />} />
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