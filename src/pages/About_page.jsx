import React from 'react'
import Heading from '../components/About/Heading'
import Welcome from '../components/About/Welcome'
import Community from '../components/About/Community'
import FeaturedContent from '../components/About/FeaturedContent'
import withFadeIn from '../components/HOC/withFadeIn'

const About_page = () => {
  return (
    <>
    <Heading />
    <Welcome />
    <Community />
    <FeaturedContent />
    </>
  )
}

const FadedAboutPage = withFadeIn(About_page);
export default FadedAboutPage;