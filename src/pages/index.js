import * as React from "react"
import Seo from "../components/seo"
import "../styles/global.css"
import { graphql } from "gatsby"

export default function IndexPage({ data }) {
  const dest = data.allMarkdownRemark.nodes
  console.log(data)
  return (
    <div>
      {dest.map((node, index) => (
        <div key={index.id}>
          <h1 className=" font-bellefair text-head2 text-white">
            {node.frontmatter.title}
          </h1>
          <h2 className="font-bellefair text-subhead1 text-white">
            {node.frontmatter.distance}
          </h2>
          <h2 className="font-bellefair text-subhead1 text-white">
            {node.frontmatter.time}
          </h2>
          <div
            className="text-lg  font-barlow text-white"
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
        </div>
      ))}
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
        }
        id
      }
    }
  }
`
