import * as React from "react"
import Seo from "../components/seo"
import "../styles/global.css"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function IndexPage() {
  return (
    <Layout>
      {/* bg */}
      <div className="absolute top-0 w-screen h-screen bg-center bg-no-repeat bg-cover -z-10 bg-homeMobile sm:bg-homeTablet md:bg-homeDesktop"></div>

      <div className="grid items-end h-screen grid-rows-2 pt-16 text-center md:text-left md:grid-rows-none md:grid-cols-2 justify-items-center ">
        {/* contents */}
        <div className="grid justify-center place-items-center md:place-items-start md:pb-32 sm:justify-between sm:content-end ">
          <h3 className="text-base font-normal leading-none text-primary-blue sm:text-xl md:text-head5 font-barlowC">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className="font-normal leading-snug text-white font-bellefair text-8xl sm:text-head1">
            SPACE
          </h1>
          <p className=" mx-[10vw] md:mx-0 md:w-[444px] text-primary-blue font-barlow text-sm leading-6 sm:text-base sm:leading-7 md:text-body font-normal">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        {/* call to action */}
        <Link
          className="grid self-center text-xl font-normal bg-white rounded-full md:self-end md:mb-32 explore-btn place-items-center text-primary-dark sm:text-head4 font-bellefair"
          to="/destination/moon/"
        >
          EXPLORE
        </Link>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />
