import React from 'react'
import Heading from '../components/AdmissionRequirements/Heading'
import AdmissionRequirements from '../components/AdmissionRequirements/AdmissionRequirements'
import DegreePrograms from '../components/AdmissionRequirements/DegreePrograms'
import CertificatePrograms from '../components/AdmissionRequirements/CertificatePrograms'
import ApplicationMaterials from '../components/AdmissionRequirements/ApplicationMaterials'
import FeaturedContent from '../components/AdmissionRequirements/FeaturedContent'
import withFadeIn from '../components/HOC/withFadeIn'


const AdmissionRequirements_Page = () => {
  return (
    <>
     <Heading /> 
     <AdmissionRequirements />
     <DegreePrograms />
     <CertificatePrograms />
     <ApplicationMaterials />
     <FeaturedContent />
    </>
  )
}

const FadedAdmissionRequirements_Page = withFadeIn(AdmissionRequirements_Page);
export default FadedAdmissionRequirements_Page;
