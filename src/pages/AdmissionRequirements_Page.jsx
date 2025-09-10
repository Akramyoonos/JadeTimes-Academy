import React from 'react'
import Heading from '../components/AdmissionRequirements/Heading'
import AdmissionRequirements from '../components/AdmissionRequirements/AdmissionRequirements'
import DegreePrograms from '../components/AdmissionRequirements/DegreePrograms'
import CertificatePrograms from '../components/AdmissionRequirements/CertificatePrograms'
import ApplicationMaterials from '../components/AdmissionRequirements/ApplicationMaterials'
import FeaturedContent from '../components/AdmissionRequirements/FeaturedContent'


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

export default AdmissionRequirements_Page
