import React from 'react'
import Articles from '../components/AllJIUNews/Articles'
import withFadeIn from '../components/HOC/withFadeIn'

const AllJIUNews_Page = () => {
  return (
    <div>
        <Articles/>
    </div>
  )
}


const FadedAllJIUNews_Page = withFadeIn(AllJIUNews_Page);
export default FadedAllJIUNews_Page;