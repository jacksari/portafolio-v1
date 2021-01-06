import React from 'react'
import BackgroundImage from 'gatsby-background-image'

import { Link } from 'gatsby'



export default function cardPortafolio({id, title, images, slug}) {
    //console.log('images', slug);
    
    return (
        <div className="cardPortafolio">
            <h3>{title}</h3>
            <Link to={`../${slug}`}  className="detailed">Detailed</Link>
            <BackgroundImage Tag="section"
                className="cardImage"
                fluid={images.fluid}
                backgroundColor={`#040e18`}
                fadeIn="soft"
            >
                
            </BackgroundImage>
            
        </div>
    )
}
