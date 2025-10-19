import React from 'react'
import ForStudents from '../components/StudentResource/ForStudents'
import Heading from '../components/StudentResource/Heading'
import withFadeIn from '../components/HOC/withFadeIn'

const StudentResource_page = () => {
  return (
    <div>
      <Heading />
      <ForStudents />
    </div>
  )
}

const FadedStudentResource_page = withFadeIn(StudentResource_page);
export default FadedStudentResource_page;
