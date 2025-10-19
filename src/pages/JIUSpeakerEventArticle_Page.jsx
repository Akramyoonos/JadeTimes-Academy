import React from 'react'
import Heading from '../components/JIUSpeakerEventArticle/Heading'
import JIUSpeakerEventArticle from '../components/JIUSpeakerEventArticle/JIUSpeakerEventArticle'
import withFadeIn from '../components/HOC/withFadeIn'

const JIUSpeakerEventArticle_Page = () => {
  return (
    <>
      <Heading /> 
      <JIUSpeakerEventArticle />
    </>
  )
}

const FadedJIUSpeakerEventArticle_Page = withFadeIn(JIUSpeakerEventArticle_Page);
export default FadedJIUSpeakerEventArticle_Page;
