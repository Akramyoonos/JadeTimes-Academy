import React from 'react'
import Heading from '../components/SpotlightcardsData/CardsData5/Heading'
import CardsData5Article from '../components/SpotlightcardsData/CardsData5/CardsData5Article'
import withFadeIn from '../components/HOC/withFadeIn'


const CardsData5_Page = () => {
  return (
    <>
    <Heading />
    <CardsData5Article />  
    </>
  )
}

const FadedCardsData5_Page = withFadeIn(CardsData5_Page);
export default FadedCardsData5_Page;