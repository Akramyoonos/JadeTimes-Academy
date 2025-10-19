import React from 'react'
import Heading from '../components/Affiliations/Heading'
import Affiliations from '../components/Affiliations/Affiliations'
import AwardRecognition from '../components/Affiliations/AwardsRecognition'
import withFadeIn from '../components/HOC/withFadeIn'

const Affiliations_Page = () => {
  return (
    <>
      <Heading />
      <Affiliations />  
      <AwardRecognition />  
    </>
  )
}


const FadedAffiliations_Page = withFadeIn(Affiliations_Page);
export default FadedAffiliations_Page;
