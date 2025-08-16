import React from 'react';
import Ourfaculty from '../components/Ourfaculty.jsx';
import Followus from '../components/Followus.jsx';
import OurStudents from '../components/OurStudents.jsx';
import SearchProgramsBy from '../components/SearchProgramsBy.jsx';
import Spotlight from '../components/Spotlight.jsx';
import Upcomingevents from '../components/Upcomingevents.jsx';
import VideoHeading from '../components/VideoHeading.jsx';
import WeareDifferent from '../components/WeareDifferent.jsx';
import CampusesAndLocations from '../components/CampusesAndLocations.jsx';
import IntroAfterSearch from '../components/IntroAfterSearch.jsx'; // <- add if needed

const Home_page = () => {
  return (
    <>
      <VideoHeading
        subtitle={<>Academy of Journalism, Communication<br />&amp; Media Innovation</>}
        altText="People working on film editing software on multiple monitors in a dimly lit room"
      />

      <SearchProgramsBy />

      {/* Make sure this intro comes BEFORE Campuses & Locations */}
      <IntroAfterSearch />  {/* remove this line if your intro already lives inside SearchProgramsBy */}

      <CampusesAndLocations />

      <Spotlight />
      <WeareDifferent />
      <OurStudents />
      <br />
      <br />
      <Upcomingevents />
      <Ourfaculty />
      <Followus />
    </>
  );
};

export default Home_page;
