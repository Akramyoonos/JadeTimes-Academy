import React from 'react'
import Heading from '../components/StudentHighlightsPosts/Heading.jsx'
import Posts from '../components/StudentHighlightsPosts/Posts.jsx'
import withFadeIn from '../components/HOC/withFadeIn'

const StudentHighlightsPosts_Page = () => {
  return (
    <>
      <Heading />
      <Posts />
    </>
  )
}

const FadedStudentHighlightsPosts_Page = withFadeIn(StudentHighlightsPosts_Page);
export default FadedStudentHighlightsPosts_Page;
