import React from 'react'
import Heading from '../components/SpotlightcardsData/CardsData1/Heading'
import CardsData1Article from '../components/SpotlightcardsData/CardsData1/CardsData1Article'
import withFadeIn from '../components/HOC/withFadeIn'


const CardsData1_Page = () => {
  return (
    <>
    <Heading />
    <CardsData1Article />  
    </>
  )
}


const FadedCardsData1_Page = withFadeIn(CardsData1_Page);
export default FadedCardsData1_Page;