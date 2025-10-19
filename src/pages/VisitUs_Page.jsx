import React from 'react'
import Heading from '../components/VisitUs/Heading'
import Description from '../components/VisitUs/Description'
import City1 from '../components/VisitUs/City1'
import City2 from '../components/VisitUs/City2'
import City3 from '../components/VisitUs/City3'
import withFadeIn from '../components/HOC/withFadeIn'

const VisitUs_Page = () => {
  return (
    <>
      <Heading />
      <Description />
      <City1 />
      <City2 />
      <City3 />
    </>
  )
}

const FadedVisitUs_Page = withFadeIn(VisitUs_Page);
export default FadedVisitUs_Page;
