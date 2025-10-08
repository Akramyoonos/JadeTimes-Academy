import React from 'react'
import Heading from '../components/IntrractiveMedia/Heading'
import DegreesCertificatesandWorkshops from '../components/IntrractiveMedia/DegreesCertificatesandWorkshops'
import Drgrees from '../components/IntrractiveMedia/Degrees'
import Programs from '../components/IntrractiveMedia/Programs'
import Workshops from '../components/IntrractiveMedia/Workshops'
import OnlineWorkshops from '../components/IntrractiveMedia/OnlineWorkshops'
import Faculty from '../components/IntrractiveMedia/Faculty'
import Alumni from '../components/IntrractiveMedia/Alumni'
import Campuses from '../components/IntrractiveMedia/Campuses'
import Locations from '../components/IntrractiveMedia/Locations'
import Spotlight from '../components/IntrractiveMedia/Spotlight'

const IntrractiveMedia_Page = () => {
  return (
    <div>
        <Heading />   
     <DegreesCertificatesandWorkshops />        
     <Drgrees />   
     <Programs />  
     <Workshops />
     <OnlineWorkshops />
     <Faculty />  
     <Alumni />  
     <Campuses /> 
     <Locations />  
     <Spotlight />
    </div>
  )
}

export default IntrractiveMedia_Page