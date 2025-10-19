import React from 'react'
import Heading from '../components/JadeTimesJournals/Heading'
import Discription from '../components/JadeTimesJournals/Discription'
import GeaduateDegree from '../components/JadeTimesJournals/GraduateDegree'
import UndergraduateDegrees from '../components/JadeTimesJournals/UndergraduateDegrees'
import OnlineDegrees from '../components/JadeTimesJournals/OnlineDegrees'
import Campuses from '../components/JadeTimesJournals/Campuses'
import withFadeIn from '../components/HOC/withFadeIn'

const JadeTimesJournals_Page = () => {
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

const FadedJadeTimesJournals_Page = withFadeIn(JadeTimesJournals_Page);
export default FadedJadeTimesJournals_Page;