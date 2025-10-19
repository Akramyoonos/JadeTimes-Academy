import React from 'react'
import Heading from '../components/AcademicCalendar/Heading'
import ViewAcademicCalendar from '../components/AcademicCalendar/ViewAcademicCalendar'
import AcademicCalendarSimple from '../components/AcademicCalendar/AcademicCalendarSimple'
import NationalHolidays from '../components/AcademicCalendar/NationalHolidays'
import GraduationTable from '../components/AcademicCalendar/GraduationTable'
import withFadeIn from '../components/HOC/withFadeIn'


const AcademicCalendar_Page = () => {
  return (
    <div>
        <Heading />
        <ViewAcademicCalendar />
        <AcademicCalendarSimple />  
        <NationalHolidays />  
        <GraduationTable />
        
    </div>
  )
}

const FadedAcademicCalendar_Page = withFadeIn(AcademicCalendar_Page);
export default FadedAcademicCalendar_Page;

