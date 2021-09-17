const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
        allWpPage {
            nodes {
              content
              id
              title
              uri
              isFrontPage
            }
        }
    }
  `).then(result => {
    //highlight-start
    result.data.allWpPage.nodes.forEach(node => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: { id: page.id } ,
        },
      })
    })
    //highlight-end
  })
// //   .then(result => {
// //     console.log(JSON.stringify(result, null, 4))
// //     process.exit()
// //   })
}