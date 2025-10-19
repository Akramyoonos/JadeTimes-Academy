import React from 'react'
import Heading from '../components/SpotlightcardsData/CardsData4/Heading'
import CardsData4Article from '../components/SpotlightcardsData/CardsData4/CardsData4Article'
import withFadeIn from '../components/HOC/withFadeIn'


const CardsData4_Page = () => {
  return (
    <>
    <Heading />
    <CardsData4Article />  
    </>
  )
}

const FadedCardsData4_Page = withFadeIn(CardsData4_Page);
export default FadedCardsData4_Page;