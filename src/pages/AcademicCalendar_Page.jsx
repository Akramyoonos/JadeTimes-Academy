import React from 'react'
import Heading from '../components/AcademicCalendar/Heading'
import ViewAcademicCalendar from '../components/AcademicCalendar/ViewAcademicCalendar'
import AcademicCalendarSimple from '../components/AcademicCalendar/AcademicCalendarSimple'
import NationalHolidays from '../components/AcademicCalendar/NationalHolidays'
import GraduationTable from '../components/AcademicCalendar/GraduationTable'


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

export default AcademicCalendar_Page