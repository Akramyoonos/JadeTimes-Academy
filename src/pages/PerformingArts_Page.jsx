import React from 'react'
import Heading from '../components/PerformingArts/Heading'
import DegreesCertificatesandWorkshops from '../components/PerformingArts/DegreesCertificatesandWorkshops'
import Drgrees from '../components/PerformingArts/Degrees'
import Programs from '../components/PerformingArts/Programs'
import Workshops from '../components/PerformingArts/Workshops'
import OnlineWorkshops from '../components/PerformingArts/OnlineWorkshops'
import Faculty from '../components/PerformingArts/Faculty'
import Alumni from '../components/PerformingArts/Alumni'
import Campuses from '../components/PerformingArts/Campuses'
import Locations from '../components/PerformingArts/Locations'
import Spotlight from '../components/PerformingArts/Spotlight'
import withFadeIn from '../components/HOC/withFadeIn'

const PerformingArts_Page = () => {
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

const FadedPerformingArts_Page = withFadeIn(PerformingArts_Page);
export default FadedPerformingArts_Page;