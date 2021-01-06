import React from "react"
import Layout from "../components/layout"
import Ido from "../components/Ido"
import ImagenPerfil from '../components/imagenPerfil'


const IndexPage = () => (

  <>
    <Layout>
      <div className="about">
        <div className="foto">
          <ImagenPerfil/>
        </div>
        <div className="datos">
          <span>Web Development</span>
          <h1>Jack Sánchez</h1>
          <p>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>
          <div className="botones-about">
            <div>
              <button className="btn-download">Download CV</button>
            </div>
            <div>
              <button className="btn-contact">Contact</button>
            </div>
          </div>
        </div>
      </div>
      
      <Ido/>
      
      <Ido/>
      <Ido/>
      <Ido/>
      <Ido/>
      
    </Layout>
  </>

)

export default IndexPage
