import React from 'react'
import Heading from '../components/ApplicationDeadlines/Heading'
import Upcomingevents from '../components/ApplicationDeadlines/Upcomingevents'
import Details from '../components/ApplicationDeadlines/Details'
import JIUEnrollmentPolicies from '../components/ApplicationDeadlines/JIUEnrollmentPolicies'

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

export default ApplicationDeadlines_Page
