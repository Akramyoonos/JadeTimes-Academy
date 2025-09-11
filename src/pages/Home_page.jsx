import React from 'react';
import Ourfaculty from '../components/Home/Ourfaculty.jsx';
import Followus from '../components/Home/Followus.jsx';
import OurStudents from '../components/Home/OurStudents.jsx';
import SearchProgramsBy from '../components/Home/SearchProgramsBy.jsx';
import Spotlight from '../components/Home/Spotlight.jsx';
import Upcomingevents from '../components/Home/Upcomingevents.jsx';
import VideoHeading from '../components/Home/VideoHeading.jsx';
import WeareDifferent from '../components/Home/WeareDifferent.jsx';
import CampusesAndLocations from '../components/Home/CampusesAndLocations.jsx';
import IntroAfterSearch from '../components/Home/IntroAfterSearch.jsx';

const Home_page = () => {
  return (
    <div className="flex flex-col">
      
        <VideoHeading
          subtitle={<></>}
          altText="People working on film editing software on multiple monitors in a dimly lit room"
        />
      
        <SearchProgramsBy />
      
        <IntroAfterSearch />
      
        <CampusesAndLocations />

        <Spotlight />

        <WeareDifferent />

         <OurStudents />

        <Upcomingevents />

        <Ourfaculty />

        <Followus />
    </div>
  );
};

export default Home_page;