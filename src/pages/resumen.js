import React from "react"
import Layout from "../components/layout"
import BreadCrumb from "../components/breadcrumb"
import Education from '../components/education'

const Resumen = () => (
  <>
    <Layout>
        <BreadCrumb titulo="Resume" message="1 year of Experience"/>
      <div className="resumen">
        <div className="resumen-education">
          <h2>Education</h2>
          <Education year="2020 Current" lugar="UNMSM" title="INdustrial" description="Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum."/>
          <Education year="2020" lugar="UNMSM" title="INdustrial" description="Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum."/>
          <Education year="2020" lugar="UNMSM" title="INdustrial" description="Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum."/>
          
        </div>
        <div className="resumen-experience">
        <h2>Experience</h2>
        <Education year="2020 Current" lugar="UNMSM" title="INdustrial" description="Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum."/>
          <Education year="2020" lugar="UNMSM" title="INdustrial" description="Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum."/>
          <Education year="2020" lugar="UNMSM" title="INdustrial" description="Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum."/>
          
        </div>
      </div>
    </Layout>
  </>
)

export default Resumen
