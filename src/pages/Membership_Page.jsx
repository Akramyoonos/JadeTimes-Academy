import React from 'react'
import Heading from '../components/Membership/Heading'
import MembershipPerks from '../components/Membership/MembershipPerks'
import MembershipSection from '../components/Membership/MembershipSection'
import GuestSection from '../components/Membership/GuestSection'
import ContactUs from '../components/Membership/ContactUs'
import withFadeIn from '../components/HOC/withFadeIn'


const Membership_Page = () => {
  return (
    <>
      <Heading/>
      <MembershipSection/>  
      <MembershipPerks/>
      <GuestSection/>
      <ContactUs/>
    </>
  )
}

const FadedMembership_Page = withFadeIn(Membership_Page);
export default FadedMembership_Page;
