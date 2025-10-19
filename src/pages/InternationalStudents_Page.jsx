import React from 'react';
import Heading from '../components/InternationalStudents/Heading';
import ResourcesSection from '../components/InternationalStudents/ResourcesSection';
import JIUInternationalCommunity from '../components/InternationalStudents/JIUInternationalCommunity';
import ContactUs from '../components/InternationalStudents/ContactUs';
import FeaturedContent from '../components/InternationalStudents/FeaturedContent';
import withFadeIn from '../components/HOC/withFadeIn'

const InternationalStudents_Page = () => {
    return (
        <div>
            <Heading />
            <JIUInternationalCommunity />
            <ResourcesSection />
            <ContactUs />
            <FeaturedContent />
        </div>
    );
};

const FadedInternationalStudents_Page = withFadeIn(InternationalStudents_Page);
export default FadedInternationalStudents_Page;