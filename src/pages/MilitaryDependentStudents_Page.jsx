import React from 'react'
import Heading from '../components/MilitaryDependentStudents/Heading'
import VeteransPage from '../components/MilitaryDependentStudents/VeteransPage'
import PromoVideo from '../components/MilitaryDependentStudents/PromoVideo'
import GiBillPage from '../components/MilitaryDependentStudents/GiBillPage'
import TrainingSection from '../components/MilitaryDependentStudents/TrainingSection'
import VeteransBenefits from '../components/MilitaryDependentStudents/VeteransBenefits'
import FeaturedContent from '../components/MilitaryDependentStudents/FeaturedContent'

const MilitaryDependentStudents_Page = () => {
  return (
    <>
      <Heading />
      <VeteransPage />
      <PromoVideo 
        videoUrl="https://www.youtube.com/embed/ScMzIvxBSi4"
        thumbnailUrl="https://img.youtube.com/vi/FKz0Fnk_TRM/maxresdefault.jpg"
      />
      <GiBillPage />
      <TrainingSection />
      <VeteransBenefits />
      <FeaturedContent />
    </>
    );
};

export default MilitaryDependentStudents_Page;