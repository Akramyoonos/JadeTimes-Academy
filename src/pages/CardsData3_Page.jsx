import React from 'react'
import Heading from '../components/SpotlightcardsData/CardsData3/Heading'
import CardsData3Article from '../components/SpotlightcardsData/CardsData3/CardsData3Article'
import withFadeIn from '../components/HOC/withFadeIn'


const CardsData3_Page = () => {
  return (
    <>
    <Heading />
    <CardsData3Article />  
    </>
  )
}

const FadedCardsData3_Page = withFadeIn(CardsData3_Page);
export default FadedCardsData3_Page;