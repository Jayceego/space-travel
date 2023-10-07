exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query destinationData {
      allMarkdownRemark(
        filter: { frontmatter: { page: { gt: 0 } } }
        sort: { frontmatter: { page: ASC } }
      ) {
        nodes {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const nodes = result.data.allMarkdownRemark.nodes

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
}
