import React from 'react'
import Heading from '../components/Film/Heading'
import DegreesCertificatesandWorkshops from '../components/Film/DegreesCertificatesandWorkshops'
import Drgrees from '../components/Film/Degrees'
import Programs from '../components/Film/Programs'
import Workshops from '../components/Film/Workshops'
import OnlineWorkshops from '../components/Film/OnlineWorkshops'
import Faculty from '../components/Film/Faculty'
import Alumni from '../components/Film/Alumni'
import Campuses from '../components/Film/Campuses'
import Locations from '../components/Film/Locations'
import Spotlight from '../components/Film/Spotlight'
import withFadeIn from '../components/HOC/withFadeIn'

const Film_Page = () => {
  return (
    <>
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
    </>
  )
}

const FadedFilm_Page = withFadeIn(Film_Page);
export default FadedFilm_Page;