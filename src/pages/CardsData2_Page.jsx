import React from 'react'
import Heading from '../components/SpotlightcardsData/CardsData2/Heading'
import CardsData2Article from '../components/SpotlightcardsData/CardsData2/CardsData2Article'
import withFadeIn from '../components/HOC/withFadeIn'


const CardsData2_Page = () => {
  return (
    <>
    <Heading />
    <CardsData2Article />  
    </>
  )
}


const FadedCardsData2_Page = withFadeIn(CardsData2_Page);
export default FadedCardsData2_Page;