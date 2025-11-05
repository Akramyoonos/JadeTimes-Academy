import React from 'react'
import Heading from '../components/ApplyJIU/Heading'
import ApplyJIU from '../components/ApplyJIU/ApplyJIU'
import ApplicationDeadlines from '../components/ApplyJIU/ApplicationDeadlines'
import EnrollmentPolicies from '../components/ApplyJIU/EnrollmentPolicies'
import ContactAdmissions from '../components/ApplyJIU/ContactAdmissions'
import withFadeIn from '../components/HOC/withFadeIn'

const ApplyJIU_Page = () => {
  return (
    <>
      <Heading />
      <ApplyJIU />
      <ApplicationDeadlines />
      <EnrollmentPolicies />
      <ContactAdmissions />
    </>
  )
}


const FadedApplyJIU_Page = withFadeIn(ApplyJIU_Page);
export default FadedApplyJIU_Page;
