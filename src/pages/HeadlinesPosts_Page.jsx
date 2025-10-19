import React from 'react'
import Heading from '../components/HeadlinesPosts/Heading'
import Posts from '../components/HeadlinesPosts/Posts'
import withFadeIn from '../components/HOC/withFadeIn'

const HeadlinesPosts_Page = () => {
  return (
    <>
      <Heading />   
      <Posts /> 
    </>
  )
}

const FadedHeadlinesPosts_Page = withFadeIn(HeadlinesPosts_Page);
export default FadedHeadlinesPosts_Page;
