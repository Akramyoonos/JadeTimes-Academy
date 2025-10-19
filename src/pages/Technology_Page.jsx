import React from 'react'
import Heading from '../components/Technology/Heading'
import DegreesCertificatesandWorkshops from '../components/Technology/DegreesCertificatesandWorkshops'
import Drgrees from '../components/Technology/Degrees'
import Programs from '../components/Technology/Degrees'
import Workshops from '../components/Technology/Workshops'
import OnlineWorkshops from '../components/Technology/OnlineWorkshops'
import Faculty from '../components/Technology/Faculty'
import Alumni from '../components/Technology/Alumni'
import Campuses from '../components/Technology/Campuses'
import Locations from '../components/Technology/Locations'
import Spotlight from '../components/Technology/Spotlight'
import withFadeIn from '../components/HOC/withFadeIn'

const Technology_Page = () => {
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

const FadedTechnology_Page = withFadeIn(Technology_Page);
export default FadedTechnology_Page;