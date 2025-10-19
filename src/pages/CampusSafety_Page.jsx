import React from 'react'
import Heading from '../components/CampusSafety/Heading'
import CleryAct from '../components/CampusSafety/CleryAct'
import PublicOrderRules from '../components/CampusSafety/PublicOrderRules'
import withFadeIn from '../components/HOC/withFadeIn'

const CampusSafety_Page = () => {
  return (
    <>
    <Heading />
    <CleryAct />    
    <PublicOrderRules />    
    </>
  )
}

const FadedCampusSafety_Page = withFadeIn(CampusSafety_Page);
export default FadedCampusSafety_Page;