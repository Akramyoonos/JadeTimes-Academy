import React from 'react'
import Heading from '../components/WorkShops/Heading'
import AcademicSkillsWorkshops from '../components/WorkShops/AcademicSkillsWorkshops'
import UpcomingAcademicLearningPrograms from '../components/WorkShops/UpcomingAcademicLearningPrograms'
import withFadeIn from '../components/HOC/withFadeIn'

const WorkShops_Page = () => {
  return (
    <div>
        <Heading />
        <AcademicSkillsWorkshops />
        <UpcomingAcademicLearningPrograms />
    </div>
  )
}

const FadedWorkShops_Page = withFadeIn(WorkShops_Page);
export default FadedWorkShops_Page;