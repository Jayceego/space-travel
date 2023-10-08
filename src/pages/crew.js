import React from "react"
import Layout from "../components/Layout"

export default function Crew() {
  return (
    <Layout>
      <div className="absolute top-0 w-screen h-full bg-center bg-no-repeat bg-cover -z-10 bg-crewMobile sm:bg-crewTablet md:bg-crewDesktop"></div>
      <div className=" mx-9">
        {/* title */}
        <h1 className="mb-3 font-normal text-white md:mb-4 text-head3 sm:text-7xl md:text-head2 font-bellefair">
          {title}
        </h1>

        {/* description */}
        <div
          className="text-sm font-light text-center mx-9 sm:mx-26 sm:mx-28 md:mx-0 md:text-left md:mb-14 md:max-w-md text-primary-blue sm:text-base md:text-lg font-barlow"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}
