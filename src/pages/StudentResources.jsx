import React from 'react'
import Heading from '../components/StudentResources/Heading'
import ExploreStudentResources from '../components/StudentResources/ExploreStudentResources'
import Spotlight from '../components/StudentResources/Spotlight'
import FileFestival from '../components/StudentResources/FileFestival'
import FlimMaking from '../components/StudentResources/FlimMaking'
import IndustryExperts from '../components/StudentResources/IndustryExperts'
import InternationalFlimMaking from '../components/StudentResources/InternationalFlimMaking'
import MediaArts from '../components/StudentResources/MediaArts'
import PerformingArts from '../components/StudentResources/PerformingArts'
import YouthCamps from '../components/StudentResources/YouthCamps'
import withFadeIn from '../components/HOC/withFadeIn'

const StudentResources = () => {
  return (
    <>
    <Heading/>
    <ExploreStudentResources/>
    <Spotlight/>
    <FileFestival/>
    <FlimMaking/>
    <IndustryExperts/>
    <InternationalFlimMaking/>
    <MediaArts/>
    <PerformingArts/>
    <YouthCamps/>
    </>
  )
}

const FadedStudentResources = withFadeIn(StudentResources);
export default FadedStudentResources;