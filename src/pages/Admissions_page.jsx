import React from 'react'
import Heading from '../components/Admissions/Heading'
import Admissions from '../components/Admissions/Admissions'
import ResourcesandInformation from '../components/Admissions/ResourcesandInformation'
import FeaturedContent from '../components/Admissions/FeaturedContent'
import withFadeIn from '../components/HOC/withFadeIn'

const Admissions_page = () => {
  return (
    <>
      <Heading />
      <Admissions />
      <ResourcesandInformation />
      <FeaturedContent />
    </>
  )
}


const FadedAdmissions_page = withFadeIn(Admissions_page);
export default FadedAdmissions_page;
