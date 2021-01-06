import React from "react"
import Layout from "../components/layout"
import BreadCrumb from "../components/breadcrumb"
import usePortafolio from '../hooks/use-portafolios'
import CardPortafolio from '../components/cardPortafolio'

const Portafolio = () => {
  const portafolios = usePortafolio();
  //console.log('portafolios', portafolios);
  return(
    
    <>
      <Layout>
        <BreadCrumb titulo="Portafolio" message="My Works"/>
        <div className="portafolio">

          {
            portafolios.map(portafolio => (
              <CardPortafolio key={portafolio.id} title={portafolio.title} images={portafolio.images[0]} slug={portafolio.slug}>
              </CardPortafolio>
            ))
          }


        </div>
      </Layout>
    </>
  )

}


export default Portafolio
