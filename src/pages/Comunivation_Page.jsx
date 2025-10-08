import React from 'react'
import Heading from '../components/Comunivation/Heading'
import DegreesCertificatesandWorkshops from '../components/Comunivation/DegreesCertificatesandWorkshops'
import Drgrees from '../components/Comunivation/Degrees'
import Programs from '../components/Comunivation/Programs'
import Workshops from '../components/Comunivation/Workshops'
import OnlineWorkshops from '../components/Comunivation/OnlineWorkshops'
import Faculty from '../components/Comunivation/Faculty'
import Alumni from '../components/Comunivation/Alumni'
import Campuses from '../components/Comunivation/Campuses'
import Locations from '../components/Comunivation/Locations'
import Spotlight from '../components/Comunivation/Spotlight'

const Comunivation_Page = () => {
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

export default Comunivation_Page