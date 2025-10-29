import React from 'react'
import Heading from '../components/JadeTimesConferences/Heading'
import ConferencesForm from '../components/JadeTimesConferences/ConferencesForm'
import ConferencesSlides from '../components/JadeTimesConferences/ConferencesSlides'
import SpecialAnnouncements from '../components/JadeTimesConferences/SpecialAnnouncements'
import OrganizingCommitteeMembers from '../components/JadeTimesConferences/OrganizingCommitteeMembers'
import JIUAdvisoryBoard from '../components/JadeTimesConferences/JIUAdvisoryBoard'
import Contact from '../components/JadeTimesConferences/Contact'
import withFadeIn from '../components/HOC/withFadeIn'

const JadeTimesConferences_Page = () => {
  return (
    <div>
      <Heading/>
      <ConferencesForm/>
      <ConferencesSlides/>
      <SpecialAnnouncements />  
      <OrganizingCommitteeMembers />  
      <JIUAdvisoryBoard />  
      <Contact />  
    </div>
  )
}

const FadedJadeTimesConferences_Page = withFadeIn(JadeTimesConferences_Page);
export default FadedJadeTimesConferences_Page;