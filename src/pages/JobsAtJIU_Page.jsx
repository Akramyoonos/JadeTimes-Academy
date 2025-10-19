import React from 'react'
import Heading from '../components/JobsAtJIU/Heading'
import JIUSection from '../components/JobsAtJIU/JIUSection'
import PerkBenefits from '../components/JobsAtJIU/PerksBenefits'
import CareereSection from '../components/JobsAtJIU/CareersSection'
import withFadeIn from '../components/HOC/withFadeIn'


const JobsAtJIU_Page = () => {
  return (
    <>
      <Heading />   
      <JIUSection />
      <PerkBenefits />
      <CareereSection />
    </>
  )
}

const FadedJobsAtJIU_Page = withFadeIn(JobsAtJIU_Page);
export default FadedJobsAtJIU_Page;
