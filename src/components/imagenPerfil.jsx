import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"

export default function ImagenPerfil() {
    const  data  = useStaticQuery(
    graphql`
        query {
            image: file(relativePath: { eq:"jack.png" }){
                 sharp: childImageSharp {
                    fluid{
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);
    //console.log('image', data.image.sharp.fluid);

    return (
        <div>
            <Img
                className="imgPerfil" 
                fluid={data.image.sharp.fluid}
                alt="Jack Anthony Sánchez Rivera"
            />
        </div>
    )
}
