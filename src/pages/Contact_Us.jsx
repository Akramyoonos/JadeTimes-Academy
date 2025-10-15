import React from 'react'
import Heading from '../components/Contact_Us/Heading'
import Details from '../components/Contact_Us/Details'
import withFadeIn from '../components/HOC/withFadeIn'


const Contact_Us = () => {
  return (
    <> 
    <Heading />
    <Details />
     </>
  )
}

const FadedContact_Us = withFadeIn(Contact_Us);
export default FadedContact_Us;
