import React from 'react'
import Heading from '../components/CreatieExpression/Heading'
import DegreesCertificatesandWorkshops from '../components/CreatieExpression/DegreesCertificatesandWorkshops'
import Drgrees from '../components/CreatieExpression/Degrees'
import Programs from '../components/CreatieExpression/Programs'
import Workshops from '../components/CreatieExpression/Workshops'
import OnlineWorkshops from '../components/CreatieExpression/OnlineWorkshops'
import Faculty from '../components/CreatieExpression/Faculty'
import Alumni from '../components/CreatieExpression/Alumni'
import Campuses from '../components/CreatieExpression/Campuses'
import Locations from '../components/CreatieExpression/Locations'
import Spotlight from '../components/CreatieExpression/Spotlight'

const CreatieExpression_Page = () => {
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

export default CreatieExpression_Page