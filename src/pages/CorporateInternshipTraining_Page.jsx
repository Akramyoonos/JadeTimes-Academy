import React from 'react'
import Heading from '../components/CorporateInternshipTraining/Heading'
import Description from '../components/CorporateInternshipTraining/Description'
import FeaturedContent from '../components/CorporateInternshipTraining/FeaturedContent'
import withFadeIn from '../components/HOC/withFadeIn'

const CorporateInternshipTraining_Page = () => {
  return (
    <div>
        <Heading /> 
        <Description />
        <FeaturedContent /> 
    </div>
  )
}

const FadedCorporateInternshipTraining_Page = withFadeIn(CorporateInternshipTraining_Page);
export default FadedCorporateInternshipTraining_Page;