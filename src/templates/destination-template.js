import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Destination() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(skip: 1) {
        nodes {
          html
          frontmatter {
            distance
            time
            title
            path {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)
  const { time, title, distance, path } =
    data.allMarkdownRemark.nodes[0].frontmatter
  return (
    <div>
      {/* <GatsbyImage
        image={planetImg.childImageSharp.gatsbyImageData}
        alt="Planet"
      /> */}

      <h1 className="text-white text-9xl">{distance}</h1>
      <h1 className="text-white text-9xl">{title}</h1>
      <h1 className="text-white text-9xl">{time}</h1>
      <GatsbyImage image={path.childImageSharp.gatsbyImageData} />
      <h1 className="text-6xl text-white">aldkasjklasjdljaskldj</h1>
    </div>
  )
}
