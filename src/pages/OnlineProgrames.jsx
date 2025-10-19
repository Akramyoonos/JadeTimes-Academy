import React from 'react'
import Heading from '../components/OnlineProgrames/Heading'
import Discription from '../components/OnlineProgrames/Discription'
import OnlineDegrees from '../components/OnlineProgrames/OnlineDegrees'
import WorkShopsForAdults from '../components/OnlineProgrames/WorkShopsForAdults'
import OnlineWeekendCamps from '../components/OnlineProgrames/OnlineWeekendCamps'
import withFadeIn from '../components/HOC/withFadeIn'

const OnlineProgrames = () => {
  return (
    <>
      <Heading />
      <Discription />
      <OnlineDegrees />
      <WorkShopsForAdults />
      <OnlineWeekendCamps />
    </>
  )
}

const FadedOnlineProgrames = withFadeIn(OnlineProgrames);
export default FadedOnlineProgrames;
