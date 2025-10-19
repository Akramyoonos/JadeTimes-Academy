import React from 'react'
import Heading from '../components/BoardOfDirectors/Heading'
import JIUCabinet from '../components/BoardOfDirectors/JIUBoardOfDirectors'
import withFadeIn from '../components/HOC/withFadeIn'

const BoardOfDirectors_Page = () => {
  return (
    <>
      <Heading />
      <JIUCabinet />
    </>
  )
}


const FadedBoardOfDirectors_Page = withFadeIn(BoardOfDirectors_Page);
export default FadedBoardOfDirectors_Page;
