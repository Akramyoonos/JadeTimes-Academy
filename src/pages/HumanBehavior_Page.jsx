import React from 'react'
import Heading from '../components/HumanBehavior/Heading'
import DegreesCertificatesandWorkshops from '../components/HumanBehavior/DegreesCertificatesandWorkshops'
import Drgrees from '../components/HumanBehavior/Degrees'
import Programs from '../components/HumanBehavior/Programs'
import Workshops from '../components/HumanBehavior/Workshops'
import OnlineWorkshops from '../components/HumanBehavior/OnlineWorkshops'
import Faculty from '../components/HumanBehavior/Faculty'
import Alumni from '../components/HumanBehavior/Alumni'
import Campuses from '../components/HumanBehavior/Campuses'
import Locations from '../components/HumanBehavior/Locations'
import Spotlight from '../components/HumanBehavior/Spotlight'

const HumanBehavior_Page = () => {
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

export default HumanBehavior_Page