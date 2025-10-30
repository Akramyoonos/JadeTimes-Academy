import React from 'react'
import Heading from '../components/OnlineProgrames/Heading'
import Discription from '../components/OnlineProgrames/Discription'
import OnlineDegrees from '../components/OnlineProgrames/OnlineDegrees'
import OnlineWeekendCamps from '../components/OnlineProgrames/OnlineWeekendCamps'
import Programs from '../components/OnlineProgrames/Programs'
import withFadeIn from '../components/HOC/withFadeIn'

const OnlineProgrames = () => {
  return (
    <>
      <Heading />
      <Discription />
      <OnlineDegrees />
      <Programs />  
      <OnlineWeekendCamps />
    </>
  )
}

const FadedOnlineProgrames = withFadeIn(OnlineProgrames);
export default FadedOnlineProgrames;
