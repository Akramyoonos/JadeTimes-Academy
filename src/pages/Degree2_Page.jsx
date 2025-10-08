import React from 'react'
import Heading from '../components/FilmDegreePages/Degree2/Heading'
import BuilAdvanced from '../components/FilmDegreePages/Degree2/BuilAdvanced'
import Curriculum from '../components/FilmDegreePages/Degree2/Curriculum'
import Highlights from '../components/FilmDegreePages/Degree2/Highlights'
import Projects from '../components/FilmDegreePages/Degree2/Projects'
import Alumni from '../components/FilmDegreePages/Degree2/Alumni'
import MasterofFineArts from '../components/FilmDegreePages/Degree2/MasterofFineArts'
import DegreeLocations from '../components/FilmDegreePages/Degree2/DegreeLocations'
import DegreeFeaturedContent from '../components/FilmDegreePages/Degree2/DegreeFeaturedContent'

const Degree2_Page = () => {
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

export default Degree2_Page