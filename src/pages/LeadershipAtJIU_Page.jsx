import React from 'react'
import Heading from '../components/LeadershipAtJIU/Heading'
import LeadershipSection from '../components/LeadershipAtJIU/LeadershipSection'
import AreaLeadershipSection from '../components/LeadershipAtJIU/AreaLeadershipSection'
import FeaturedContent from '../components/About/FeaturedContent'
import withFadeIn from '../components/HOC/withFadeIn'

const LeadershipAtJIU_Page = () => {
  return (
    <>
      <Heading />
      <LeadershipSection />
      <AreaLeadershipSection />
      <FeaturedContent />
    </>
  )
}

const FadedLeadershipAtJIU_Page = withFadeIn(LeadershipAtJIU_Page);
export default FadedLeadershipAtJIU_Page;
