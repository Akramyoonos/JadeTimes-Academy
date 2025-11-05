import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import JIUNews_Page from './pages/JIUNews_Page';
import JobsAtJIU_Page from './pages/JobsAtJIU_Page';
import PresidentPage from './pages/PresidentPage';
import Affiliations_Page from './pages/Affiliations_Page';
import Reviews_Page from './pages/Reviews_Page';
import SearchResultsPage from './pages/SearchResultsPage';
import { SearchProvider } from './context/SearchContext';
import JIUSpeakerEventArticle_Page from './pages/JIUSpeakerEventArticle_Page';
import JIUPARTNERSHIPSPOSTS_Page from './pages/JIUPARTNERSHIPSPOSTS_Page';
import AcademicProgramsPosts_Page from './pages/AcademicProgramsPosts_Page';
import JIUCommunityPosts_Page from './pages/JIUCommunityPosts_Page';
import HeadlinesPosts_Page from './pages/HeadlinesPosts_Page';
import StudentHighlightsPosts_Page from './pages/StudentHighlightsPosts_Page';
import Disability_Page from './pages/Disability_Page';
import CampusSafety_Page from './pages/CampusSafety_Page';
import ProgramDatesAndTuition_Page from './pages/ProgramDatesAndTuition_Page';
import Film_Page from './pages/Film_Page';
import CardsData1_Page from './pages/CardsData1_Page';
import CardsData2_Page from './pages/CardsData2_Page';
import CardsData3_Page from './pages/CardsData3_Page';
import CardsData4_Page from './pages/CardsData4_Page';
import CardsData5_Page from './pages/CardsData5_Page';
import CardsData6_Page from './pages/CardsData6_Page';
import CardsData7_Page from './pages/CardsData7_Page';
import CardsData8_Page from './pages/CardsData8_Page';
import Degree1_Page from './pages/Degree1_Page';
import Degree2_Page from './pages/Degree2_Page';
import Degree3_Page from './pages/Degree3_Page';
import Degree4_Page from './pages/Degree4_Page';
import Degree5_Page from './pages/Degree5_Page';
import TermsConditions_Page from './pages/TermsConditions_Page';
import CourseCatalogs_Page from './pages/CourseCatalogs_Page';
import AcademicCalendar_Page from './pages/AcademicCalendar_Page';
import JobPositions_Page from './pages/JobPositions_Page';
import MediaArts_Page from './pages/MediaArts_Page';
import PerformingArts_Page from './pages/PerformingArts_Page';
import CreatieExpression_Page from './pages/CreatieExpression_Page';
import Journalism_Page from './pages/Journalism_Page';
import Comunivation_Page from './pages/Comunivation_Page';
import DigitalMedia_Page from './pages/DigitalMedia_Page';
import Technology_Page from './pages/Technology_Page';
import IntrractiveMedia_Page from './pages/IntrractiveMedia_Page';
import EntertainmentMedia_Page from './pages/EntertainmentMedia_Page';
import Psychology_Page from './pages/Psychology_Page';
import HumanBehavior_Page from './pages/HumanBehavior_Page';
import Marketing_Page from './pages/Marketing_Page';
import JadeTimesJournals_Page from './pages/JadeTimesJournals_Page';
import JadeTimesConferences_Page from './pages/JadeTimesConferences_Page';
import AllJIUNews_Page from './pages/AllJIUNews_Page';
import WorkShops_Page from './pages/WorkShops_Page'
import JIUStore_Page from './pages/JIUStore_Page';
import TwoHourWorkShops_Page from './pages/TwoHourWorkShops_Page';
import CorporateInternshipTraining_Page from './pages/CorporateInternshipTraining_Page';
import Admin_Page from './pages/Admin_Page';
import Administration_Page from './pages/Administration_Page';
import ScrollToTop from './components/ScrollToTop';






// Global click interceptor so ANY <a href="/..."> in header/footer/body routes via SPA
function AppInner() {
  const navigate = useNavigate();
  const location = useLocation();

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
      <main key={location.pathname} className="min-h-[80vh] animate-advanced-fade-in">
        <Routes>
          <Route path="/"                              element={<Home_page />} />
          <Route path="/ABOUT-US/"                         element={<About_page />} />
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
          <Route path="/request-info/*"               element={<RequestInfo_Page />} />
          <Route path="/apply-now/*"               element={<ApplyJIU_Page />} />
          <Route path="/mission-and-purpose/*"      element={<MissionAndPurpose_Page />} />
          <Route path="/on-campus/visit-us/*"                element={<VisitUs_Page />} />
          <Route path="/Accreditation/*"          element={<Accreditation_Page />} />
          <Route path="/admissions-requirements/*"  element={<AdmissionRequirements_Page />} />
          <Route path="/admissions/veterans-military-dependent-students/*"  element={<MilitaryDependentStudents_Page />} />
          <Route path="/Areas-Of-Study/*"           element={<DatesTuition_Page />} />
          <Route path="/student-life/*"       element={<NYFAStudentLife_Page />} />
          <Route path="/Faq/*"                     element={<Faq_Page />} />
          <Route path="/important-dates/*"    element={<ApplicationDeadlines_Page />} />
          <Route path="/admissions/international-students/*"    element={<InternationalStudents_Page />} />
           <Route path="/who-we-are/leadership/*"       element={<LeadershipAtJIU_Page />} />
            <Route path="/who-we-are/leadership/board-of-directors/*"       element={<BoardOfDirectors_Page />} />
            <Route path="/cabinet/*"       element={<Cabinet_Page />} />
            <Route path="/JIU-in-the-news/*"       element={<JIUNews_Page />} />
            <Route path="/jobs-at-nyfa/*"       element={<JobsAtJIU_Page />} />
            <Route path="/presidents-page/"       element={<PresidentPage />} />
            <Route path="/affiliations/*"       element={<Affiliations_Page />} />
            <Route path="/reviews/page/*"       element={<Reviews_Page />} />
            <Route path="/JIUSpeakerEventArticle/" element={<JIUSpeakerEventArticle_Page />} />
            <Route path="/JIU-PARTNERSHIPS/" element={<JIUPARTNERSHIPSPOSTS_Page />} />
            <Route path="/Academic-Programs/" element={<AcademicProgramsPosts_Page />} />
            <Route path="/JIU-COMMUNITY/" element={<JIUCommunityPosts_Page />} />
            <Route path="/HEADLINES/" element={<HeadlinesPosts_Page />} />
            <Route path="/Student-Highlights/" element={<StudentHighlightsPosts_Page />} />
            <Route path="/disability-and-accessibility/" element={<Disability_Page />} />
            <Route path="/on-campus/campus-safety/" element={<CampusSafety_Page />} />
            <Route path="/program-dates-and-tuition/" element={<ProgramDatesAndTuition_Page />} />
            <Route path="/film/*" element={<Film_Page />} />
            <Route path="/Jadetimes-International-University-(JIU):Shaping-the-Future-of-Online-Education/*" element={<CardsData1_Page />} />
            <Route path="/The-Story-of-Jadetimes:Empowering-Research-and-Innovation/*" element={<CardsData2_Page />} />
            <Route path="/Jadetimes-Journal-of-Universal-Studies-(JJUS):Advancing-Knowledge-Across-Borders/*" element={<CardsData3_Page />} />
            <Route path="/Jadetimes-International-University-Partners-with-Special-Graphics-LLC-for-Advanced-Graphic-Design-Education/*" element={<CardsData4_Page />} />
            <Route path="/Jadetimes-International-Research-Conference-2025/*" element={<CardsData5_Page />} />
            <Route path="/How-Jadetimes-University-Launches-Students-Into-Industry/*" element={<CardsData6_Page />} />
            <Route path="/cards-data7/*" element={<CardsData7_Page />} />
            <Route path="/cards-data8/*" element={<CardsData8_Page />} />
            <Route path="/The-Art-of-Visual-Storytelling/*" element={<Degree1_Page />} />
            <Route path="/History-of-Cinema/*" element={<Degree2_Page />} />
            <Route path="/Advance-Scriptwriting/*" element={<Degree3_Page />} />
            <Route path="/Color-Grading-&-Correction/*" element={<Degree4_Page />} />
            <Route path="/Producing-&-Financing-Films/*" element={<Degree5_Page />} />
            <Route path="/Terms-Conditions/*" element={<TermsConditions_Page />} />
            <Route path="/Course-Catalogs/*" element={<CourseCatalogs_Page />} />
            <Route path="/Academic-Calendar/*" element={<AcademicCalendar_Page />} />
            <Route path="/Job-Positions/*" element={<JobPositions_Page />} />
            <Route path="/Media-Arts/*" element={<MediaArts_Page />} />
            <Route path="/Performing-Arts/*" element={<PerformingArts_Page />} />
            <Route path="/Creatie-Expression/*" element={<CreatieExpression_Page />} />
            <Route path="/Journalism/*" element={<Journalism_Page />} />
            <Route path="/Comunivation/" element={<Comunivation_Page />} />
            <Route path="/Digital-Media/*" element={<DigitalMedia_Page />} />
            <Route path="/Technology/*" element={<Technology_Page />} />
            <Route path="/Intrractive-Media/*" element={<IntrractiveMedia_Page />} />
            <Route path="/Entertainment-Media/*" element={<EntertainmentMedia_Page />} />
            <Route path="/Psychology/*" element={<Psychology_Page />} />
            <Route path="/Human-Behavior/*" element={<HumanBehavior_Page />} />
            <Route path="/Marketing/*" element={<Marketing_Page />} />
            <Route path="/Jadetimes-Journals/*" element={<JadeTimesJournals_Page />} />
            <Route path="/Jadetimes-Conferences/*" element={<JadeTimesConferences_Page />} />
            <Route path="/All-JIU-News/*" element={<AllJIUNews_Page />} />
            <Route path="/Work-Shops/*" element={<WorkShops_Page />} />
            <Route path="/JIU-Store/*" element={<JIUStore_Page />} />
            <Route path="/2-hour-workshops/*" element={<TwoHourWorkShops_Page />} />
            <Route path="/Corporate-Internship-Training/*" element={<CorporateInternshipTraining_Page />} />
            <Route path="/Admin-Login/" element={<Admin_Page />} />
            <Route path="/Administration/" element={<Administration_Page />} />
            
            <Route path="/search" element={<SearchResultsPage />} />
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
            <SearchProvider>
        <ScrollToTop />
        <AppInner />
      </SearchProvider>
    </Router>
  );
}