import React from 'react'
import Heading from '../components/Marketing/Heading'
import DegreesCertificatesandWorkshops from '../components/Marketing/DegreesCertificatesandWorkshops'
import Drgrees from '../components/Marketing/Degrees'
import Programs from '../components/Marketing/Programs'
import Workshops from '../components/Marketing/Workshops'
import OnlineWorkshops from '../components/Marketing/OnlineWorkshops'
import Faculty from '../components/Marketing/Faculty'
import Alumni from '../components/Marketing/Alumni'
import Campuses from '../components/Marketing/Campuses'
import Locations from '../components/Marketing/Locations'
import Spotlight from '../components/Marketing/Spotlight'
import withFadeIn from '../components/HOC/withFadeIn'

const Marketing_Page = () => {
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

const FadedMarketing_Page = withFadeIn(Marketing_Page);
export default FadedMarketing_Page;