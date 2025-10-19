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
import withFadeIn from '../components/HOC/withFadeIn'

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

const FadedPsychology_Page = withFadeIn(Psychology_Page);
export default FadedPsychology_Page;