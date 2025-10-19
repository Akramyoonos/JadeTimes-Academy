import React from 'react'
import Heading from '../components/JIUStore/Heading'
import Shop from '../components/JIUStore/Shop'
import withFadeIn from '../components/HOC/withFadeIn'

const JIUStore_Page = () => {
  return (
    <div>
        <Heading /> 
        <Shop />    
    </div>
  )
}

const FadedJIUStore_Page = withFadeIn(JIUStore_Page);
export default FadedJIUStore_Page;