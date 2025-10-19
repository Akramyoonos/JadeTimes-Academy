import React from 'react'
import NewsSection from '../components/JIUNews/NewsSection'
import VideoSection from '../components/JIUNews/VideoSection'
import Podcasts from '../components/JIUNews/Podcasts'
import FeaturedVideo from '../components/JIUNews/FeaturedVideo'
import withFadeIn from '../components/HOC/withFadeIn'


const JIUNews_Page = () => {
  return (
    <>
      <NewsSection />
      <VideoSection />
      <Podcasts />  
      <FeaturedVideo /> 
    </>
  )
}

const FadedJIUNews_Page = withFadeIn(JIUNews_Page);
export default FadedJIUNews_Page;
