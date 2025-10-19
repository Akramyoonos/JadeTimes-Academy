import React from 'react'
import Heading from '../components/SpotlightcardsData/CardsData8/Heading'
import CardsData8Article from '../components/SpotlightcardsData/CardsData8/CardsData8Article'
import withFadeIn from '../components/HOC/withFadeIn'


const CardsData8_Page = () => {
  return (
    <>
    <Heading />
    <CardsData8Article />  
    </>
  )
}

const FadedCardsData8_Page = withFadeIn(CardsData8_Page);
export default FadedCardsData8_Page;