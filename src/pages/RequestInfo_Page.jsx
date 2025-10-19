import React from 'react'
import RequestInfo from '../components/RequestInfo/RequestInfo'
import withFadeIn from '../components/HOC/withFadeIn'

const RequestInfo_Page = () => {
  return (
    <>
      <RequestInfo />
    </>
  )
}

const FadedRequestInfo_Page = withFadeIn(RequestInfo_Page);
export default FadedRequestInfo_Page;

