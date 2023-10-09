import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Technology({ data }) {
  const html = data.markdownRemark.html
  const { quote, title, portrait, landscape, slug } =
    data.markdownRemark.frontmatter

  const techData = ["launch-vehicle", "spaceport", "space-capsule"]

  return (
    <Layout>
      <div className="absolute top-0 w-screen h-full bg-center bg-no-repeat bg-cover -z-10 bg-technologyMobile sm:bg-technologyTablet md:bg-technologyDesktop"></div>
      <div className="">
        {/* parent container */}
        <div className="w-screen h-screen pt-24 mx-auto md:max-w-7xl md:pt-52">
          {/* page title */}
          <h2 className="w-screen sm:max-w-fit pb-8 sm:mb-5 text-lg font-normal tracking-widest text-center text-white sm:ml-[5vw] xl:ml-0 uppercase sm:text-left sm:text-xl md:text-head5 font-barlowC">
            <span className="mr-5 font-bold text-white text-opacity-25">
              03
            </span>
            space launch 101
          </h2>

          {/* content */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row">
            {/* left */}
            <div className="flex gap-10 flex-col md:flex-row mb-7 md:mb-0 order-2 md:ml-[5vw] xl:ml-0 text-center justify-around md:text-left md:order-1">
              {/* pagination */}
              <div className="flex items-center self-center gap-4 md:flex-col md:mb-0">
                {techData.map((node, index) => (
                  <Link
                    key={index}
                    to={`/technology/${node}`}
                    className={`w-10 h-10 md:w-20 md:h-20 sm:w-16 sm:h-16 text-base sm:text-2xl md:text-head4 font-bellefair font-normal text-center grid place-items-center rounded-full ${
                      node === slug
                        ? "tech-active text-black"
                        : "tech-not-active border-[1px] text-white"
                    }`}
                  >
                    {index + 1}
                  </Link>
                ))}
              </div>

              <div className="my-auto">
                {/* position */}
                <h1 className="mb-3 text-sm font-normal uppercase text-primary-blue md:mb-7 sm:text-base font-bellefair">
                  {quote}
                </h1>

                {/* name */}
                <h1 className="mb-5 text-2xl font-normal text-white uppercase md:mb-10 sm:text-4xl md:text-head3 font-bellefair">
                  {title}
                </h1>

                {/* description */}
                <div
                  className="mb-4 text-sm font-light text-center sm:mb-10 mx-9 sm:mx-26 sm:mx-28 md:mx-0 md:text-left text-primary-blue sm:text-base md:text-lg font-barlow"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            </div>

            {/* right */}
            <div className="justify-end order-1 hidden w-screen md:grid md:mb-0 mb-7 md:w-full sm:mb-10 md:order-2">
              <GatsbyImage image={portrait.childImageSharp.gatsbyImageData} />
            </div>
            <div className="grid justify-end order-1 w-screen md:hidden md:mb-0 mb-7 md:w-full sm:mb-10 md:order-2">
              <GatsbyImage image={landscape.childImageSharp.gatsbyImageData} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Technology" />

export const query = graphql`
  query technology($slug: String) {
    markdownRemark(
      fileAbsolutePath: { regex: "/technology/" }
      frontmatter: { slug: { eq: $slug } }
    ) {
      html
      frontmatter {
        quote
        title
        slug
        portrait {
          childImageSharp {
            gatsbyImageData
          }
        }
        landscape {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
