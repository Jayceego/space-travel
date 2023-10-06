import React from "react"
import Layout from "../../components/Layout"
import Destination from "../../templates/destination-template"

export default function Moon() {
  return (
    <Layout>
      <div className="absolute top-0 w-screen h-full bg-center bg-no-repeat bg-cover -z-10 bg-destinationMobile sm:bg-destinationTablet md:bg-destinationDesktop"></div>
      <Destination />
      <div className=" mx-9"></div>
    </Layout>
  )
}
