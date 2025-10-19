import React from 'react'
import Heading from '../components/PrivacyPolicy/Heading'
import PrivacyPolicyDetail from '../components/PrivacyPolicy/PrivacyPolicyDetail'
import withFadeIn from '../components/HOC/withFadeIn'

const PrivacyPolicy_Page = () => {
  return (
    <>
      <Heading />
      <PrivacyPolicyDetail />
    </>
  )
}

const FadedPrivacyPolicy_Page = withFadeIn(PrivacyPolicy_Page);
export default FadedPrivacyPolicy_Page;

