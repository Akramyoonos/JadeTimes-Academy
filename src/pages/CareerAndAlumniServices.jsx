import React from 'react'
import Heading from '../components/CAREER AND ALUMNI SERVICES/Heading'
import Discription from '../components/CAREER AND ALUMNI SERVICES/Discription'
import CareerServices from '../components/CAREER AND ALUMNI SERVICES/CareerServices'
import ExploreNetwork from '../components/CAREER AND ALUMNI SERVICES/ExploreNetwork'
import ContactUs from '../components/CAREER AND ALUMNI SERVICES/ContactUs'
import withFadeIn from '../components/HOC/withFadeIn'

const CareerAndAlumniServices = () => {
  return (
    <>
     <Heading /> 
     <Discription />
     <CareerServices />
     <ExploreNetwork />
     <ContactUs />
    </>
  )
}

const FadedCareerAndAlumniServices = withFadeIn(CareerAndAlumniServices);
export default FadedCareerAndAlumniServices;
