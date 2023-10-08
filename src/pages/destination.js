import { Link, graphql, navigate } from "gatsby"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        distance
        time
        slug
        title
        path {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default function Destination({ data }) {
  console.log(data)
  const html = data.markdownRemark.html
  const { time, title, distance, path, slug } = data.markdownRemark.frontmatter
  const planet = ["moon", "mars", "europa", "titan"]

  console.log("IMAGEEE : ", time, title, distance, path, slug, html)

  return (
    <Layout>
      {/* background */}
      <div className="absolute top-0 w-screen h-full bg-center bg-no-repeat bg-cover -z-10 bg-destinationMobile sm:bg-destinationTablet md:bg-destinationDesktop"></div>

      {/* parent container */}
      <div className="grid items-end w-screen h-full pt-7 md:grid-cols-2 md:pb-36">
        {/* left side */}
        <div className="grid">
          <h2 className="mx-auto mb-8 font-normal tracking-widest text-white uppercase sm:mx-0 sm:ml-[10vw] sm:mr-auto text-lg sm:text-xl md:text-head5 font-barlowC">
            <span className="mr-5 font-bold text-white text-opacity-25">
              01
            </span>
            Pick your destination
          </h2>
          <GatsbyImage
            className=" md:mb-12 mx-10 md:min-w-[350px] w-fit place-self-center max-w-[170px] sm:max-w-[300px] md:max-w-md"
            image={path.childImageSharp.gatsbyImageData}
          />
        </div>

        {/* right side */}
        <div className="grid self-start mt-8 md:self-end place-items-center md:place-items-stretch">
          {/* navigation */}
          <div className="flex mb-4 gap-9 md:mb-9">
            {planet.map((destination, index) => (
              <Link
                onClick={() => navigate(`/destination/${destination}`)}
                key={index}
                to={`/destination/${destination}`}
                className={`text-base font-normal uppercase planet-nav font-barlowC text-primary-blue ${
                  destination === slug ? "active" : "not-active"
                }`}
              >
                {destination}
              </Link>
            ))}
          </div>

          {/* title */}
          <h1 className="mb-3 font-normal text-white md:mb-4 text-head3 sm:text-7xl md:text-head2 font-bellefair">
            {title}
          </h1>

          {/* description */}
          <div
            className="text-sm font-light text-center mx-9 sm:mx-26 sm:mx-28 md:mx-0 md:text-left md:mb-14 md:max-w-md text-primary-blue sm:text-base md:text-lg font-barlow"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* details */}
          <div className="relative grid w-[80vw] md:w-full text-center md:text-left grid-cols-1 justify-items-center md:justify-items-start sm:grid-cols-2 md:grid-cols-4">
            <div className="absolute divider w-[80vw] sm:w-[70vw] mt-7 md:w-[25vw] md:max-w-md "></div>
            <h1 className="mt-8 font-normal text-white uppercase text-subhead1 font-bellefair">
              <span className="text-sm font-normal font-barlowC text-primary-blue">
                avg. distance
              </span>
              <br />
              {distance}
            </h1>
            <h1 className="mt-8 font-normal text-white uppercase md:mr-auto text-subhead1 font-bellefair">
              <span className="text-sm font-normal font-barlowC text-primary-blue">
                est. travel time
              </span>
              <br />
              {time}
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}
