import React from 'react'
import Heading from '../components/JobPositions/Heading'
import Application from '../components/JobPositions/Application'
import withFadeIn from '../components/HOC/withFadeIn'

const JobPositions_Page = () => {
  return (
    <div>
        <Heading /> 
        <Application />
    </div>
  )
}

const FadedJobPositions_Page = withFadeIn(JobPositions_Page);
export default FadedJobPositions_Page;