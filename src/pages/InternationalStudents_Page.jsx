import React from 'react';
import Heading from '../components/InternationalStudents/Heading';
import ResourcesSection from '../components/InternationalStudents/ResourcesSection';
import JIUInternationalCommunity from '../components/InternationalStudents/JIUInternationalCommunity';
import ContactUs from '../components/InternationalStudents/ContactUs';
import FeaturedContent from '../components/InternationalStudents/FeaturedContent';

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

export default InternationalStudents_Page;