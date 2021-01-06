import React from "react"
import Header from "./header"
//import Helmet from "react-helmet"
import Footer from "./footer"
import Seo from './seo'
import "../styles/styles.scss"
import useSeo from '../hooks/use-seo'




import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faObjectGroup, faBullhorn } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faObjectGroup, faBullhorn )


const Layout = ({ children }) => {
  const seocms = useSeo();
  const { fallbackSeo:{ title} } = seocms;
  //console.log('SEO', Seo)
  return (
    <>

      <div className="layout">
        <Seo data={seocms}/>
        <Header/>
        { children }
        <Footer title={title}/>
      </div>
    </>
  )
}


export default Layout
