import React from 'react'
import Heading from '../components/Programfinder/Heading'
import FindYourProgram from '../components/Programfinder/FindYourProgram'
import withFadeIn from '../components/HOC/withFadeIn'

const Programfinder_page = () => {
  return (
    <>
      <Heading title="PROGRAM FINDER" />
      <FindYourProgram />
    </>
  )
}

const FadedProgramfinder_page = withFadeIn(Programfinder_page);
export default FadedProgramfinder_page;
