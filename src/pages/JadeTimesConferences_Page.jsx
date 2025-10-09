import React from 'react'
import Heading from '../components/JadeTimesConferences/Heading'
import Discription from '../components/JadeTimesConferences/Discription'
import GeaduateDegree from '../components/JadeTimesConferences/GraduateDegree'
import UndergraduateDegrees from '../components/JadeTimesConferences/UndergraduateDegrees'
import OnlineDegrees from '../components/JadeTimesConferences/OnlineDegrees'
import Campuses from '../components/JadeTimesConferences/Campuses'

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

export default JadeTimesConferences_Page