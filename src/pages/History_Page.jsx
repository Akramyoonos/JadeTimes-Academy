import React from 'react'
import Heading from '../components/History/Heading'
import History from '../components/History/History'
import Component from '../components/History/Component';
import withFadeIn from '../components/HOC/withFadeIn'



const History_Page = () => {
  return (
    <>
    <Heading/>
    <History/>
    <Component/>
    </>
  )
}

const FadedHistory_Page = withFadeIn(History_Page);
export default FadedHistory_Page;
