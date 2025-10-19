import React from 'react'
import Heading from '../components/Faculty Directory/Heading'
import FacultyDirectory from '../components/Faculty Directory/FacultyDirectory'
import withFadeIn from '../components/HOC/withFadeIn'

const FacultyDirectoryPage = () => {
  return (
    <>
      <Heading />
      <FacultyDirectory />
    </>
  )
}

const FadedFacultyDirectoryPage = withFadeIn(FacultyDirectoryPage);
export default FadedFacultyDirectoryPage;
