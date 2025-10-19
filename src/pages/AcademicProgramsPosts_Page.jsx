import React from 'react'
import Heading from '../components/AcademicProgramsPosts/Heading'
import Posts from '../components/AcademicProgramsPosts/Posts'
import withFadeIn from '../components/HOC/withFadeIn'

const AcademicProgramsPosts_Page = () => {
  return (
    <>
      <Heading />
      <Posts /> 
    </>
  )
}

const FadedAcademicProgramsPosts_Page = withFadeIn(AcademicProgramsPosts_Page);
export default FadedAcademicProgramsPosts_Page; 


