import React from 'react'
import Heading from '../components/ScholarshipAndGrants/Heading'
import Scholarship from '../components/ScholarshipAndGrants/Scholarship'
import Grants from '../components/ScholarshipAndGrants/Grants'
import ScholarshipAndGrantsOrganization from '../components/ScholarshipAndGrants/ScholarshipAndGrantsOrganization'
import withFadeIn from '../components/HOC/withFadeIn'

const ScholarshipAndGrants_page = () => {
  return (
    <>
      <Heading />
      <Scholarship />
      <Grants />
      <ScholarshipAndGrantsOrganization />
    </>
  )
}

const FadedScholarshipAndGrants_page = withFadeIn(ScholarshipAndGrants_page);
export default FadedScholarshipAndGrants_page;
