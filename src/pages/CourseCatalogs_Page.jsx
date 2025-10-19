import React from 'react'
import Catalogs from '../components/CourseCatalogs/Catalogs'
import withFadeIn from '../components/HOC/withFadeIn'


const CourseCatalogs_Page = () => {
  return (
    <div>
        <Catalogs />    
    </div>
  )
}

const FadedCourseCatalogs_Page = withFadeIn(CourseCatalogs_Page);
export default FadedCourseCatalogs_Page;