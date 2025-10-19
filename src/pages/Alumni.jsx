import React from 'react'
import Heading from '../components/Alumni/Heading'
import Discription from '../components/Alumni/Discription'
import Explore from '../components/Alumni/Explore'
import BrowsebyDiscipline from '../components/Alumni/BrowsebyDiscipline'
import withFadeIn from '../components/HOC/withFadeIn'

const Alumni = () => {
  return (
    <>
    <Heading/>
    <Discription/>
    <Explore/>
    <BrowsebyDiscipline/>
    </>
  )
}


const FadedAlumni = withFadeIn(Alumni);
export default FadedAlumni;