/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    if (stage.startsWith("develop")) {
      actions.setWebpackConfig({
        resolve: {
          alias: {
            "react-dom": "@hot-loader/react-dom",
          },
        },
      })
    }
  }

  exports.createPages = async({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query{
          allDatoCmsPortafolio{
            nodes{
              slug,    
            }
          }
        }
    `);
    //console.log('slug', result.data.allDatoCmsPortafolio.nodes);
    if(result.errors){
      reporter.panic('No hubo resultados', result.error)
    }
    const portafolios = result.data.allDatoCmsPortafolio.nodes;

    portafolios.forEach(portafolio => {
      let path = `${portafolio.slug}`
      actions.createPage({
        path,
        component: require.resolve('./src/components/portafolio.jsx'),
        context: {
          slug: portafolio.slug
        }
      })
    })
  }