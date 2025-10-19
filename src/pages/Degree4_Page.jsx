import React from 'react'
import Heading from '../components/FilmDegreePages/Degree4/Heading'
import BuilAdvanced from '../components/FilmDegreePages/Degree4/BuilAdvanced'
import Curriculum from '../components/FilmDegreePages/Degree4/Curriculum'
import Highlights from '../components/FilmDegreePages/Degree4/Highlights'
import Projects from '../components/FilmDegreePages/Degree4/Projects'
import Alumni from '../components/FilmDegreePages/Degree4/Alumni'
import MasterofFineArts from '../components/FilmDegreePages/Degree4/MasterofFineArts'
import DegreeLocations from '../components/FilmDegreePages/Degree4/DegreeLocations'
import DegreeFeaturedContent from '../components/FilmDegreePages/Degree4/DegreeFeaturedContent'
import withFadeIn from '../components/HOC/withFadeIn'

const Degree4_Page = () => {
  return (
    <div>
        <Heading />
        <BuilAdvanced />
        <Curriculum/> 
        <Highlights />  
        <Projects />  
        <Alumni />  
        <MasterofFineArts />  
        <DegreeLocations /> 
        <DegreeFeaturedContent /> 
    </div>
  )
}

const FadedDegree4_Page = withFadeIn(Degree4_Page);
export default FadedDegree4_Page;