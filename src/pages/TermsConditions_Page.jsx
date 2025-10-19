import React from 'react'
import Heading from '../components/TermsConditions/Heading'
import TermsConditionsDetail from '../components/TermsConditions/TermsConditionsDetail'
import withFadeIn from '../components/HOC/withFadeIn'

const TermsConditions_Page = () => {
  return (
    <div>
        <Heading />
        <TermsConditionsDetail />
    </div>
  )
}

const FadedTermsConditions_Page = withFadeIn(TermsConditions_Page);
export default FadedTermsConditions_Page;