import React from 'react'
import NewsSection from '../components/JIUNews/NewsSection'
import VideoSection from '../components/JIUNews/VideoSection'
import Podcasts from '../components/JIUNews/Podcasts'
import FeaturedVideo from '../components/JIUNews/FeaturedVideo'


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

export default JIUNews_Page
