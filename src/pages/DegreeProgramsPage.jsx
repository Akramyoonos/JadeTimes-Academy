import React from 'react'
import Heading from '../components/DegreePrograms/Heading'
import Discription from '../components/DegreePrograms/Discription'
import GeaduateDegree from '../components/DegreePrograms/GraduateDegree'
import UndergraduateDegrees from '../components/DegreePrograms/UndergraduateDegrees'
import OnlineDegrees from '../components/DegreePrograms/OnlineDegrees'
import Campuses from '../components/DegreePrograms/Campuses'

const DegreeProgramsPage = () => {
  return (
    <>
      <Heading/>
      <Discription/>
      <GeaduateDegree/>
      <UndergraduateDegrees/>
      <OnlineDegrees />
      <Campuses />
    </>
  )
}

export default DegreeProgramsPage
