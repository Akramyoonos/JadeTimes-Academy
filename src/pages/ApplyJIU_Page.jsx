import React from 'react'
import Heading from '../components/ApplyJIU/Heading'
import ApplyNYFA from '../components/ApplyJIU/ApplyNYFA'
import ApplicationDeadlines from '../components/ApplyJIU/ApplicationDeadlines'
import EnrollmentPolicies from '../components/ApplyJIU/EnrollmentPolicies'
import ContactAdmissions from '../components/ApplyJIU/ContactAdmissions'

const ApplyJIU_Page = () => {
  return (
    <>
      <Heading />
      <ApplyNYFA />
      <ApplicationDeadlines />
      <EnrollmentPolicies />
      <ContactAdmissions />
    </>
  )
}

export default ApplyJIU_Page
