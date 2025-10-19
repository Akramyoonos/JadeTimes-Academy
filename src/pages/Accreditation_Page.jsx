import React from 'react'
import Heading from '../components/Accreditation/Heading';
import AccreditationPage from '../components/Accreditation/AccreditationPage';
import withFadeIn from '../components/HOC/withFadeIn'

const Accreditation_Page = () => {
  return (
    <>
      <Heading />
      <AccreditationPage />
    </>
  )
}

const FadedAccreditation_Page = withFadeIn(Accreditation_Page);
export default FadedAccreditation_Page;
