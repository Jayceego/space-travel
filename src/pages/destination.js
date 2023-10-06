import { Link, graphql } from "gatsby"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { useLocation } from "@reach/router"

export default function Destination({ data }) {
  const location = useLocation()
  const { time, title, distance, path } =
    data.allMarkdownRemark.nodes[0].frontmatter
  const planet = ["moon", "mars", "europa", "titan"]
  console.log(data)
  return (
    <Layout>
      {/* background */}
      <div className="absolute top-0 w-screen h-full bg-center bg-no-repeat bg-cover -z-10 bg-destinationMobile sm:bg-destinationTablet md:bg-destinationDesktop"></div>

      {/* parent container */}
      <div className="grid items-end w-screen h-screen grid-cols-2 pb-36">
        {/* left side */}
        <div className="ml-auto">
          <h2 className="font-normal tracking-widest text-white uppercase text-head5 font-barlowC">
            <span className="mr-5 font-bold text-white text-opacity-25">
              01
            </span>
            Pick your destination
          </h2>
          <GatsbyImage
            className="max-w-md mt-24"
            image={path.childImageSharp.gatsbyImageData}
          />
        </div>

        {/* right side */}
        <div className="ml-10">
          {/* navigation */}
          <div className="flex gap-7">
            {planet.map((destination, index) => (
              <Link
                key={index}
                to={destination}
                className={`text-base font-normal uppercase planet-nav font-barlowC text-primary-blue ${
                  location.pathname === destination ? "active" : ""
                }`}
              >
                {destination}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { frontmatter: { page: ASC } }, limit: 4) {
      nodes {
        html
        frontmatter {
          distance
          time
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
  }
`
