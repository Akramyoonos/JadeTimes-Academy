import React from 'react'
import Heading from '../components/Membership/Heading'
import MembershipPerks from '../components/Membership/MembershipPerks'
import MembershipSection from '../components/Membership/MembershipSection'
import GuestSection from '../components/Membership/GuestSection'
import ContactUs from '../components/Membership/ContactUs'


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

export default Membership_Page
