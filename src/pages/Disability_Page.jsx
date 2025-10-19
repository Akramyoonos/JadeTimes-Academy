import React from 'react'
import Heading from '../components/Disability/Heading'
import DisabilityAccessibility from '../components/Disability/DisabilityAccessibility'
import FeaturedContent from '../components/Disability/FeaturedContent'
import withFadeIn from '../components/HOC/withFadeIn'

const Disability_Page = () => {
  return (
    <>
      <Heading />   
      <DisabilityAccessibility />  
      <FeaturedContent />   
    </>
  )
}

const FadedDisability_Page = withFadeIn(Disability_Page);
export default FadedDisability_Page;
