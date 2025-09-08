import React from 'react'
import Heading from '../components/ApplyNyfa/Heading'
import ApplyNYFA from '../components/ApplyNyfa/ApplyNYFA'
import CardsData from '../components/ApplyNyfa/CardsData'
import ApplicationDeadlines from '../components/ApplyNyfa/ApplicationDeadlines'
import EnrollmentPolicies from '../components/ApplyNyfa/EnrollmentPolicies'
import ContactAdmissions from '../components/ApplyNyfa/ContactAdmissions'

const ApplyNyfa_Page = () => {
  return (
    <>
      <Heading />
      <ApplyNYFA />
      <CardsData />
      <ApplicationDeadlines />
      <EnrollmentPolicies />
      <ContactAdmissions />
    </>
  )
}

export default ApplyNyfa_Page
