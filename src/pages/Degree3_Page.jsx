import React from 'react'
import Heading from '../components/FilmDegreePages/Degree3/Heading'
import BuilAdvanced from '../components/FilmDegreePages/Degree3/BuilAdvanced'
import Curriculum from '../components/FilmDegreePages/Degree3/Curriculum'
import Highlights from '../components/FilmDegreePages/Degree3/Highlights'
import Projects from '../components/FilmDegreePages/Degree3/Projects'
import Alumni from '../components/FilmDegreePages/Degree3/Alumni'
import MasterofFineArts from '../components/FilmDegreePages/Degree3/MasterofFineArts'
import DegreeLocations from '../components/FilmDegreePages/Degree3/DegreeLocations'
import DegreeFeaturedContent from '../components/FilmDegreePages/Degree3/DegreeFeaturedContent'

const Degree3_Page = () => {
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

export default Degree3_Page