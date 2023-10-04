import * as React from "react"
import Seo from "../components/seo"
import "../styles/global.css"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function IndexPage({ data }) {
  const dest = data.allMarkdownRemark.nodes
  return (
    <div>
      {dest.map((node, index) => {
        const img = getImage(node.frontmatter.path.childImageSharp)
        return (
          <div key={index.id}>
            <h1 className="text-white font-bellefair text-head2">
              {node.frontmatter.title}
            </h1>
            <h2 className="text-white font-bellefair text-subhead1">
              {node.frontmatter.distance}
            </h2>
            <h2 className="text-white font-bellefair text-subhead1">
              {node.frontmatter.time}
            </h2>
            <GatsbyImage image={img} />
            <div
              className="text-lg text-white font-barlow"
              dangerouslySetInnerHTML={{ __html: node.html }}
            />
          </div>
        )
      })}
    </div>
  )
}

export const Head = () => <Seo title="Home" />

export const query = graphql`
  query destinationQuery {
    allMarkdownRemark {
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
        id
      }
    }
  }
`
