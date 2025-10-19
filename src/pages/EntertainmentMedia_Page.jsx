import React from 'react'
import Heading from '../components/EntertainmentMedia/Heading'
import DegreesCertificatesandWorkshops from '../components/EntertainmentMedia/DegreesCertificatesandWorkshops'
import Drgrees from '../components/EntertainmentMedia/Degrees'
import Programs from '../components/EntertainmentMedia/Programs'
import Workshops from '../components/EntertainmentMedia/Workshops'
import OnlineWorkshops from '../components/EntertainmentMedia/OnlineWorkshops'
import Faculty from '../components/EntertainmentMedia/Faculty'
import Alumni from '../components/EntertainmentMedia/Alumni'
import Campuses from '../components/EntertainmentMedia/Campuses'
import Locations from '../components/EntertainmentMedia/Locations'
import Spotlight from '../components/EntertainmentMedia/Spotlight'
import withFadeIn from '../components/HOC/withFadeIn'

const EntertainmentMedia_Page = () => {
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

const FadedEntertainmentMedia_Page = withFadeIn(EntertainmentMedia_Page);
export default FadedEntertainmentMedia_Page;