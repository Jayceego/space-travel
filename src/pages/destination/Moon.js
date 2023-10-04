import React from "react"
import Layout from "../../components/Layout"

export default function Moon() {
  return (
    <Layout>
      <div className="absolute top-0 w-screen h-full bg-center bg-no-repeat bg-cover -z-10 bg-destinationMobile sm:bg-destinationTablet md:bg-destinationDesktop"></div>
      <div className=" mx-9">
        <h1 className="text-5xl text-white ">hellooo</h1>
      </div>
    </Layout>
  )
}
