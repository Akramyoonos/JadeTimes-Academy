import React from 'react'
import Testimonial from '../components/Reviews/Testimonial'
import TestimonialPage from '../components/Reviews/TestimonialPage'
import withFadeIn from '../components/HOC/withFadeIn'


const Reviews_Page = () => {
  return (
    <>
      <Testimonial />   
      <TestimonialPage />
    </>
  )
}

const FadedReviews_Page = withFadeIn(Reviews_Page);
export default FadedReviews_Page;
