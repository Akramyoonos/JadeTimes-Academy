import React from 'react'
import Heading from '../components/JadeTimesJournals/Heading'
import Discription from '../components/JadeTimesJournals/Discription'
import GeaduateDegree from '../components/JadeTimesJournals/GraduateDegree'
import UndergraduateDegrees from '../components/JadeTimesJournals/UndergraduateDegrees'
import OnlineDegrees from '../components/JadeTimesJournals/OnlineDegrees'
import Campuses from '../components/JadeTimesJournals/Campuses'

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

export default JadeTimesJournals_Page