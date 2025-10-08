import React from 'react'
import Heading from '../components/MediaArts/Heading'
import DegreesCertificatesandWorkshops from '../components/MediaArts/DegreesCertificatesandWorkshops'
import Drgrees from '../components/MediaArts/Degrees'
import Programs from '../components/MediaArts/Programs'
import Workshops from '../components/MediaArts/Workshops'
import OnlineWorkshops from '../components/MediaArts/OnlineWorkshops'
import Faculty from '../components/MediaArts/Faculty'
import Alumni from '../components/MediaArts/Alumni'
import Campuses from '../components/MediaArts/Campuses'
import Locations from '../components/MediaArts/Locations'
import Spotlight from '../components/MediaArts/Spotlight'

const MediaArts_Page = () => {
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

export default MediaArts_Page