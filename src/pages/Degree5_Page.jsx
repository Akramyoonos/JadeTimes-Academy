import React from 'react'
import Heading from '../components/FilmDegreePages/Degree5/Heading'
import BuilAdvanced from '../components/FilmDegreePages/Degree5/BuilAdvanced'
import Curriculum from '../components/FilmDegreePages/Degree5/Curriculum'
import Highlights from '../components/FilmDegreePages/Degree5/Highlights'
import Projects from '../components/FilmDegreePages/Degree5/Projects'
import Alumni from '../components/FilmDegreePages/Degree5/Alumni'
import MasterofFineArts from '../components/FilmDegreePages/Degree5/MasterofFineArts'
import DegreeLocations from '../components/FilmDegreePages/Degree5/DegreeLocations'
import DegreeFeaturedContent from '../components/FilmDegreePages/Degree5/DegreeFeaturedContent'
import withFadeIn from '../components/HOC/withFadeIn'

const Degree5_Page = () => {
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

const FadedDegree5_Page = withFadeIn(Degree5_Page);
export default FadedDegree5_Page;