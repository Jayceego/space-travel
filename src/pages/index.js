import * as React from "react"
import Seo from "../components/seo"
import "../styles/global.css"
import Layout from "../components/Layout"

export default function IndexPage() {
  return (
    <Layout>
      <div className="absolute top-0 w-screen h-full bg-center bg-no-repeat bg-cover -z-10 bg-homeMobile md:bg-homeTablet lg:bg-homeDesktop"></div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />
