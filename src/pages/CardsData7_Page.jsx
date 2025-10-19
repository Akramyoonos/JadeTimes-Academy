import React from 'react'
import Heading from '../components/SpotlightcardsData/CardsData7/Heading'
import CardsData7Article from '../components/SpotlightcardsData/CardsData7/CardsData7Article'
import withFadeIn from '../components/HOC/withFadeIn'


const CardsData7_Page = () => {
  return (
    <>
    <Heading />
    <CardsData7Article />  
    </>
  )
}

const FadedCardsData7_Page = withFadeIn(CardsData7_Page);
export default FadedCardsData7_Page;