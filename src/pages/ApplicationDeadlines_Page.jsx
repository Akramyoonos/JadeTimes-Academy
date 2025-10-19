import React from 'react'
import Heading from '../components/ApplicationDeadlines/Heading'
import Upcomingevents from '../components/ApplicationDeadlines/Upcomingevents'
import Details from '../components/ApplicationDeadlines/Details'
import JIUEnrollmentPolicies from '../components/ApplicationDeadlines/JIUEnrollmentPolicies'
import withFadeIn from '../components/HOC/withFadeIn'

const ApplicationDeadlines_Page = () => {
  return (
    <>
      <Heading />
      <Details />
      <Upcomingevents />
      <JIUEnrollmentPolicies />
    </>
  )
}


const FadedApplicationDeadlines_Page = withFadeIn(ApplicationDeadlines_Page);
export default FadedApplicationDeadlines_Page;
