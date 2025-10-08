import React from 'react'
import Heading from '../components/DigitalMedia/Heading'
import DegreesCertificatesandWorkshops from '../components/DigitalMedia/DegreesCertificatesandWorkshops'
import Drgrees from '../components/DigitalMedia/Degrees'
import Programs from '../components/DigitalMedia/Programs'
import Workshops from '../components/DigitalMedia/Workshops'
import OnlineWorkshops from '../components/DigitalMedia/OnlineWorkshops'
import Faculty from '../components/DigitalMedia/Faculty'
import Alumni from '../components/DigitalMedia/Alumni'
import Campuses from '../components/DigitalMedia/Campuses'
import Locations from '../components/DigitalMedia/Locations'
import Spotlight from '../components/DigitalMedia/Spotlight'

const DigitalMedia_Page = () => {
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

export default DigitalMedia_Page