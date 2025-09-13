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
import ApplyJIU_Page from './pages/ApplyJIU_Page';
import MissionAndPurpose_Page from './pages/MissionAndPurpose_Page';
import VisitUs_Page from './pages/VisitUs_Page';
import Accreditation_Page from './pages/Accreditation_Page';
import AdmissionRequirements_Page from './pages/AdmissionRequirements_Page';
import MilitaryDependentStudents_Page from './pages/MilitaryDependentStudents_Page';
import DatesTuition_Page from './pages/DatesTuition_Page';
import NYFAStudentLife_Page from './pages/NYFAStudentLife_Page';
import Faq_Page from './pages/Faq_Page';
import ApplicationDeadlines_Page from './pages/ApplicationDeadlines_Page';
import InternationalStudents_Page from './pages/InternationalStudents_Page';
import LeadershipAtJIU_Page from './pages/LeadershipAtJIU_Page';
import BoardOfDirectors_Page from './pages/BoardOfDirectors_Page';
import Cabinet_Page from './pages/Cabinet_Page';

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
          <Route path="/events/list/*"                      element={<Events />} />
          <Route path="/contact_us"                    element={<Contact_Us />} />
          <Route path="/alumni"                        element={<Alumni />} />
          <Route path="/student-resources/"              element={<StudentResources />} />
          <Route path="/Degree-Programs/*"          element={<DegreeProgramsPage />} />
          <Route path="/online-programs/*"             element={<OnlineProgrames />} />
          <Route path="/career-and-alumni-services/*"     element={<CareerAndAlumniServices />} />
          <Route path="/faculty-directory/*"        element={<FacultyDirectoryPage />} />
          <Route path="/current-student-resources/*"        element={<StudentResource_page />} />
          <Route path="/JIU-history/*"                element={<History_Page />} />
          <Route path="/ScholarshipAndGrants_page/*"   element={<ScholarshipAndGrants_page />} />
          <Route path="/student-finances/scholarships-and-grants/*"   element={<ScholarshipAndGrants_page />} />
          <Route path="/policy/*"           element={<PrivacyPolicy_Page />} />
          <Route path="/JIU-membership/*"               element={<Membership_Page />} />
          <Route path="/request-info?/*"               element={<RequestInfo_Page />} />
          <Route path="/apply-now/*"               element={<ApplyJIU_Page />} />
          <Route path="/mission-and-purpose/*"      element={<MissionAndPurpose_Page />} />
          <Route path="/on-campus/visit-us/*"                element={<VisitUs_Page />} />
          <Route path="/Accreditation/*"          element={<Accreditation_Page />} />
          <Route path="/admissions-requirements/*"  element={<AdmissionRequirements_Page />} />
          <Route path="/admissions/veterans-military-dependent-students/*"  element={<MilitaryDependentStudents_Page />} />
          <Route path="/dates-tuition/*"           element={<DatesTuition_Page />} />
          <Route path="/student-life/*"       element={<NYFAStudentLife_Page />} />
          <Route path="/Faq/*"                     element={<Faq_Page />} />
          <Route path="/important-dates/*"    element={<ApplicationDeadlines_Page />} />
          <Route path="/admissions/international-students/*"    element={<InternationalStudents_Page />} />
           <Route path="/who-we-are/leadership/*"       element={<LeadershipAtJIU_Page />} />
            <Route path="/who-we-are/leadership/board-of-directors/*"       element={<BoardOfDirectors_Page />} />
            <Route path="/cabinet/*"       element={<Cabinet_Page />} />
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