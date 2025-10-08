import React from 'react'
import Heading from '../components/Psychology/Heading'
import DegreesCertificatesandWorkshops from '../components/Psychology/DegreesCertificatesandWorkshops'
import Drgrees from '../components/Psychology/Degrees'
import Programs from '../components/Psychology/Programs'
import Workshops from '../components/Psychology/Workshops'
import OnlineWorkshops from '../components/Psychology/OnlineWorkshops'
import Faculty from '../components/Psychology/Faculty'
import Alumni from '../components/Psychology/Alumni'
import Campuses from '../components/Psychology/Campuses'
import Locations from '../components/Psychology/Locations'
import Spotlight from '../components/Psychology/Spotlight'

const Psychology_Page = () => {
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

export default Psychology_Page