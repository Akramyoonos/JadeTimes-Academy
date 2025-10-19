import React from 'react'
import Heading from '../components/SpotlightcardsData/CardsData6/Heading'
import CardsData6Article from '../components/SpotlightcardsData/CardsData6/CardsData6Article'
import withFadeIn from '../components/HOC/withFadeIn'


const CardsData6_Page = () => {
  return (
    <>
    <Heading />
    <CardsData6Article />  
    </>
  )
}

const FadedCardsData6_Page = withFadeIn(CardsData6_Page);
export default FadedCardsData6_Page;