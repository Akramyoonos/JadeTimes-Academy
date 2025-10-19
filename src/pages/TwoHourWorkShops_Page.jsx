import React from 'react'
import Heading from '../components/TwoHourWorkShops/Heading'
import StylePrograms from '../components/TwoHourWorkShops/StylePrograms'
import TwoHourPrograms from '../components/TwoHourWorkShops/TwoHourPrograms'
import Campuses from '../components/TwoHourWorkShops/Campuses'
import Locations from '../components/TwoHourWorkShops/Locations'
import Curriculum from '../components/TwoHourWorkShops/Curriculum'
import TwoHourProgramApplications from '../components/TwoHourWorkShops/TwoHourProgramApplications'
import Content from '../components/TwoHourWorkShops/Content'

const TwoHourWorkShops_Page = () => {
  return (
    <div>
      <Heading />
      <StylePrograms />
      <TwoHourPrograms /> 
      <Campuses />
      <Locations /> 
      <Curriculum />
      <TwoHourProgramApplications />  
      <Content /> 
    </div>
  )
}

export default TwoHourWorkShops_Page