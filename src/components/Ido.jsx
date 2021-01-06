
import React from 'react'
import Task from './task'
import { graphql, useStaticQuery } from 'gatsby'


export default function Ido() {
    const data = useStaticQuery(graphql`
    query{
        allDatoCmsIDo{
            nodes{
            id,
            title,
            description,
            icon
            }
        }
    }
    `);
    //console.log(data.allDatoCmsIDo.nodes);
    const ido = data.allDatoCmsIDo.nodes;
    //console.log(ido)
    


    return (
        
        <section className="what-do">
            <h2>What I do</h2>
            <div className="what-do-container">

            
            {ido.map(ido => (
                    <Task key={ido.id}  title={ido.title} description={ido.description} icon={ido.icon}/>
                ))}        
                 


            </div>
      </section>
    )
}
