import React from 'react'
import Heading from '../components/Journalism/Heading'
import DegreesCertificatesandWorkshops from '../components/Journalism/DegreesCertificatesandWorkshops'
import Drgrees from '../components/Journalism/Degrees'
import Programs from '../components/Journalism/Programs'
import Workshops from '../components/Journalism/Workshops'
import OnlineWorkshops from '../components/Journalism/OnlineWorkshops'
import Faculty from '../components/Journalism/Faculty'
import Alumni from '../components/Journalism/Alumni'
import Campuses from '../components/Journalism/Campuses'
import Locations from '../components/Journalism/Locations'
import Spotlight from '../components/Journalism/Spotlight'


const Journalism_Page = () => {
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

export default Journalism_Page