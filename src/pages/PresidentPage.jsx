import React from 'react'
import Heading from '../components/PresidentPage/Heading'
import LetterFromPresident from '../components/PresidentPage/LetterFromPresident'
import FeaturedContent from '../components/PresidentPage/FeaturedContent'
import withFadeIn from '../components/HOC/withFadeIn'

const PresidentPage = () => {
  return (
    <>
      <Heading />
      <LetterFromPresident />
      <FeaturedContent/>  
    </>
  )
}

const FadedPresidentPage = withFadeIn(PresidentPage);
export default FadedPresidentPage;
