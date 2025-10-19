import React from 'react'
import Heading from '../components/JIUPARTNERSHIPSPOSTS/Heading'
import Posts from '../components/JIUPARTNERSHIPSPOSTS/Posts'
import withFadeIn from '../components/HOC/withFadeIn'

const JIUPARTNERSHIPSPOSTS_Page = () => {
  return (
    <>
      <Heading />
      <Posts /> 
    </>
  )
}

const FadedJIUPARTNERSHIPSPOSTS_Page = withFadeIn(JIUPARTNERSHIPSPOSTS_Page);
export default FadedJIUPARTNERSHIPSPOSTS_Page;
