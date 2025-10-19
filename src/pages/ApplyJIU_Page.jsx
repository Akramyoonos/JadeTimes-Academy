import React from 'react'
import Heading from '../components/ApplyJIU/Heading'
import ApplyNYFA from '../components/ApplyJIU/ApplyNYFA'
import ApplicationDeadlines from '../components/ApplyJIU/ApplicationDeadlines'
import EnrollmentPolicies from '../components/ApplyJIU/EnrollmentPolicies'
import ContactAdmissions from '../components/ApplyJIU/ContactAdmissions'
import withFadeIn from '../components/HOC/withFadeIn'

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


const FadedApplyJIU_Page = withFadeIn(ApplyJIU_Page);
export default FadedApplyJIU_Page;
