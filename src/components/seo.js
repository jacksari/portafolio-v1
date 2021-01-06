/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
//import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ data, title }) {
  //console.log('data', data)
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      } `
  );
  //console.log('site', site)
  

  //const metaDescription = description || site.siteMetadata.description
  //const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet>
      <title>{title}</title>
      <meta charset="utf-8"/>
      
      <meta name="description" content={data.fallbackSeo.description}/>
      <meta name="keywords" content="Jack Sari, Jack Sánchez, Jack Sanchez, Jack Anthony Sanchez Rivera"/>
      <meta name="author" content={site.siteMetadata.author} />

      <meta name="copyright" content="© 20020 Jack Sari"/>
      <meta name="robots" content="index"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Ubuntu:wght@400;700&display=swap" rel="stylesheet"></link>
  
    </Helmet>
  )
}


export default SEO
