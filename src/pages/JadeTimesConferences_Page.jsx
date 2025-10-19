import React from 'react'
import Heading from '../components/JadeTimesConferences/Heading'
import Discription from '../components/JadeTimesConferences/Discription'
import GeaduateDegree from '../components/JadeTimesConferences/GraduateDegree'
import UndergraduateDegrees from '../components/JadeTimesConferences/UndergraduateDegrees'
import OnlineDegrees from '../components/JadeTimesConferences/OnlineDegrees'
import Campuses from '../components/JadeTimesConferences/Campuses'
import withFadeIn from '../components/HOC/withFadeIn'

const JadeTimesConferences_Page = () => {
  return (
    <div>
      <Heading/>
      <Discription/>
      <GeaduateDegree/>
      <UndergraduateDegrees/>
      <OnlineDegrees />
      <Campuses />
    </div>
  )
}

const FadedJadeTimesConferences_Page = withFadeIn(JadeTimesConferences_Page);
export default FadedJadeTimesConferences_Page;