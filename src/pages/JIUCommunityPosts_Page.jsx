import React from 'react'
import Heading from '../components/JIUCommunityPosts/Heading'
import Posts from '../components/JIUCommunityPosts/Posts'
import withFadeIn from '../components/HOC/withFadeIn'

const JIUCommunityPosts_Page = () => {
  return (
    <>
      <Heading />
      <Posts />
    </>
  )
}

const FadedJIUCommunityPosts_Page = withFadeIn(JIUCommunityPosts_Page);
export default FadedJIUCommunityPosts_Page;
