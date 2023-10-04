import * as React from "react"
import Seo from "../components/seo"
import "../styles/global.css"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"

export default function IndexPage({ data }) {
  const homeData = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className="grid items-end h-screen grid-rows-2 text-center md:text-left md:grid-rows-none md:grid-cols-2 justify-items-center ">
        {/* contents */}
        <div className="grid justify-center sm:h-screen place-items-center md:place-items-start md:pb-32 sm:justify-between sm:content-end ">
          <h3 className="text-base font-normal leading-none text-primary-blue sm:text-xl md:text-head5 font-barlow">
            {homeData[0].frontmatter.quote}
          </h3>
          <h1 className="font-normal leading-snug text-white font-bellefair text-8xl sm:text-head1">
            {homeData[0].frontmatter.title}
          </h1>
          <div
            className=" mx-[10vw] md:mx-0 md:w-[444px] text-primary-blue font-barlow text-sm leading-6 sm:text-base sm:leading-7 md:text-body font-normal"
            dangerouslySetInnerHTML={{ __html: homeData[0].html }}
          />
        </div>

        {/* call to action */}
        <Link
          className="grid self-center text-xl font-normal bg-white rounded-full md:self-end md:mb-32 explore-btn place-items-center text-primary-dark sm:text-head4 font-bellefair w-36 h-36 sm:w-60 sm:h-60 md:w-72 md:h-72"
          to="/destination/moon/"
        >
          {homeData[0].frontmatter.button}
        </Link>
      </div>
      <div className="absolute top-0 w-screen h-screen bg-center bg-no-repeat bg-cover -z-10 bg-homeMobile sm:bg-homeTablet md:bg-homeDesktop"></div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export const home = graphql`
  query home {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "SPACE" } } }) {
      nodes {
        frontmatter {
          button
          quote
          title
        }
        html
      }
    }
  }
`
