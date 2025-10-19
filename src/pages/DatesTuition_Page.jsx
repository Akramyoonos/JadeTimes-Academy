import React from 'react'
import Heading from '../components/Dates&Tuition/Heading'
import ProgramsSection from '../components/Dates&Tuition/ProgramsSection'
import withFadeIn from '../components/HOC/withFadeIn'

const DatesTuition_Page = () => {
  return (
    <>
      <Heading />
      <ProgramsSection />
    </>
  )
}

const FadedDatesTuition_Page = withFadeIn(DatesTuition_Page);
export default FadedDatesTuition_Page;
