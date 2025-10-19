import React from 'react'
import Heading from '../components/NYFAStudentLife/Heading'
import StudentLife from '../components/NYFAStudentLife/StudentLife'
import CampusSection from '../components/NYFAStudentLife/CampusSection'
import withFadeIn from '../components/HOC/withFadeIn'

const NYFAStudentLife_Page = () => {
  return (
    <>
     <Heading />   
     <StudentLife />  
     <CampusSection />
    </>
  )
}

const FadedNYFAStudentLife_Page = withFadeIn(NYFAStudentLife_Page);
export default FadedNYFAStudentLife_Page;