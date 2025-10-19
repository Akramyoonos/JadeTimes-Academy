import React from 'react'
import Heading from '../components/MissionAndPurpose/Heading'
import StatementPage from '../components/MissionAndPurpose/StatementPage'
import PromoVideo from '../components/MissionAndPurpose/PromoVideo'
import CoreValues from '../components/MissionAndPurpose/CoreValues'
import FeaturedContent from '../components/About/FeaturedContent'
import withFadeIn from '../components/HOC/withFadeIn'


const MissionAndPurpose_Page = () => {
  return (
    <>
      <Heading />
      <StatementPage />
      <PromoVideo />
      <CoreValues/>
      <FeaturedContent />
    </>
  )
}

const FadedMissionAndPurpose_Page = withFadeIn(MissionAndPurpose_Page);
export default FadedMissionAndPurpose_Page;
