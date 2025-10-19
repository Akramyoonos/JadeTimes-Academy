import React from 'react'
import Heading from '../components/Faq/Heading'
import VeteransInformation from '../components/Faq/VeteransInformation'
import withFadeIn from '../components/HOC/withFadeIn'

const Faq_Page = () => {
  return (
    <>
      <Heading />
      <VeteransInformation />
    </>
  )
}

const FadedFaq_Page = withFadeIn(Faq_Page);
export default FadedFaq_Page;
