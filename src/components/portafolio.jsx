import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'
import Image from 'gatsby-image'
import Tecno from './tecno'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWeebly } from "@fortawesome/free-brands-svg-icons"

import { faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

export const query = graphql`
    query($slug: String!){
        allDatoCmsPortafolio(filter: { slug: { eq: $slug } }){
            nodes{
                title,
                link,
                date,
                description,
                github,
                technology{
                    title,
                    id
                }
                images{
                    fluid(maxWidth:1200){
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`


export default function Portafolio({data: {allDatoCmsPortafolio : {nodes}}}) {
    //console.log('data', nodes);
    const { date, description, github, images, link, technology, title } = nodes[0];
    const tech = technology;
    //console.log('tech', nodes);
    return (
        <>
            <Layout>
                
                <div className="portafolio-component">
                    <h1>{title}</h1>
                    <div className="container-portafolio">
                        <div className="images-portafolio">
                            <Image className="icon-port" fluid={images[0].fluid}/>
                        </div>
                        <div className="portafolio-description">
                            <h3>Description</h3>
                            
                            <p><FontAwesomeIcon className="icon-port" icon={faUser} />Jack Sánchez</p>
                            <a href={link} target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-port" icon={faWeebly} />Demo</a>
                            <p><FontAwesomeIcon className="icon-port" icon={faCalendarAlt} /> {date}</p>
                            <p className="description-port">{description}</p>
                            <a href={github} target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-port" icon={faGithub} />Github</a>
                            <h3>Technology</h3>
                            <div className="portafolio-technology">
                                {
                                    tech.map(tecno => (
                                        <Tecno key={tecno.id} tecno={tecno.title}/>
                                        
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
