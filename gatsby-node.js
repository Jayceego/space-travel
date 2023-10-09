exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result1 = await graphql(`
    query destinationData {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/destination/" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  const result2 = await graphql(`
    query crewData {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/crew/" } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result1.errors || result2.errors) {
    throw new Error("GraphQL query error")
  }

  const nodes = result1.data.allMarkdownRemark.nodes

  if (nodes && nodes.length > 0) {
    nodes.forEach(node => {
      createPage({
        path: "/destination/" + node.frontmatter.slug,
        component: require.resolve("./src/pages/destination.js"),
        context: { slug: node.frontmatter.slug },
      })
    })
  } else {
    console.warn("No data found for allMarkdownRemark.nodes")
  }

  const nodes2 = result2.data.allMarkdownRemark.nodes

  if (nodes2 && nodes2.length > 0) {
    nodes2.forEach(node => {
      createPage({
        path: "/crew/" + node.frontmatter.slug,
        component: require.resolve("./src/pages/crew.js"),
        context: { slug: node.frontmatter.slug },
      })
    })
  } else {
    console.warn("No data found for allMarkdownRemark.nodes")
  }
}
