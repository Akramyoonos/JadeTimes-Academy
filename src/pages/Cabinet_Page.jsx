import React from 'react'
import Heading from '../components/Cabinet/Heading'
import JIUCabinet from '../components/Cabinet/JIUCabinet'
import withFadeIn from '../components/HOC/withFadeIn'

const Cabinet_Page = () => {
  return (
    <>
      <Heading />
      <JIUCabinet />
    </>
  )
}

const FadedCabinet_Page = withFadeIn(Cabinet_Page);
export default FadedCabinet_Page;