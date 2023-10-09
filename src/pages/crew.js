import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

export default function Crew({ data }) {
  const html = data.markdownRemark.html
  const { name, title, path, slug } = data.markdownRemark.frontmatter

  const pageData = [
    "commander",
    "flight-engineer",
    "mission-specialist",
    "pilot",
  ]

  return (
    <Layout>
      {/* background */}
      <div className="absolute top-0 w-screen h-screen bg-center bg-no-repeat bg-cover -z-10 bg-crewMobile sm:bg-crewTablet md:bg-crewDesktop"></div>

      {/* parent container */}
      <div className="w-screen h-screen pt-24 mx-auto overflow-hidden md:max-w-7xl md:pt-52">
        {/* page title */}
        <h2 className="w-screen pb-8 sm:mb-5 text-lg font-normal tracking-widest text-center text-white sm:ml-[5vw] xl:ml-0 uppercase sm:text-left md:w-fit sm:text-xl md:text-head5 font-barlowC">
          <span className="mr-5 font-bold text-white text-opacity-25">02</span>
          meet your crew
        </h2>

        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row">
          {/* left */}
          <div className="flex flex-col mb-7 order-2 md:ml-[5vw] xl:ml-0 text-center justify-around md:text-left sm:order-1 md:pb-20 ">
            <div className="order-2 sm:order-1">
              {/* position */}
              <h1 className="mb-1 text-base font-normal text-white uppercase opacity-50 sm:mb-5 md:mb-7 sm:text-2xl md:text-head4 font-bellefair">
                {title}
              </h1>

              {/* name */}
              <h1 className="mb-2 text-2xl font-normal text-white uppercase sm:mb-7 md:mb-10 sm:text-4xl md:text-head3 font-bellefair">
                {name}
              </h1>

              {/* description */}
              <div
                className="mb-4 text-sm font-light text-center sm:mb-10 mx-9 sm:mx-26 sm:mx-28 md:mx-0 md:text-left text-primary-blue sm:text-base md:text-lg font-barlow"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>

            {/* pagination */}
            <div className="flex self-center order-1 gap-4 mb-6 md:mb-0 md:self-start sm:order-2">
              {pageData.map((node, index) => (
                <Link
                  key={index}
                  to={`/crew/${node}`}
                  className={`w-3 h-3 rounded-full md:w-4 md:h-4 ${
                    node === slug ? "page-active" : "page-not-active"
                  }`}
                ></Link>
              ))}
            </div>
          </div>

          {/* right */}
          <div className="relative grid justify-center order-1 w-screen mb-7 md:w-full sm:mb-0 sm:order-2">
            <GatsbyImage
              className="h-fit max-w-[200px] sm:max-w-[350px] md:max-w-full"
              image={path.childImageSharp.gatsbyImageData}
            />
            <div className="absolute bottom-0 w-full border-b border-gray-700 "></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Crew" />

export const query = graphql`
  query crewData($slug: String) {
    markdownRemark(
      fileAbsolutePath: { regex: "/crew/" }
      frontmatter: { slug: { eq: $slug } }
    ) {
      html
      frontmatter {
        name
        title
        slug
        path {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
