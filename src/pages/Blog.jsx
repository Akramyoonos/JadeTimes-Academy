import React from 'react'
import Heading from '../components/Blog/Heading'
import BlogSearch from '../components/Blog/BlogSearch'
import Partnership from '../components/Blog/Partnership'
import Festival from '../components/Blog/Festival'
import StudentsAndAlumni from '../components/Blog/StudentsAndAlumni.JSX'
import GuestSpeackers from '../components/Blog/GuestSpeackers'
import Success from '../components/Blog/Success'
import withFadeIn from '../components/HOC/withFadeIn'


const Blog = () => {
  return (
    <>
    <Heading/>
    <BlogSearch/>
    <Partnership/>
    <Festival/>
    <StudentsAndAlumni/>
    <GuestSpeackers/>
    <Success/>
    </>
  )
}

const FadedBlog = withFadeIn(Blog);
export default FadedBlog;