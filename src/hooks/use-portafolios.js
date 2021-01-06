import { graphql, useStaticQuery } from 'gatsby';

const usePortafolios = () => {
    const datos = useStaticQuery(graphql`
        query{
                allDatoCmsPortafolio{
                    nodes{
                        id,
                        slug,
                        title,
                        images{
                            fluid{
                                ...GatsbyDatoCmsFluid
                            }
                        }
                    }
                }
            }
    `);
    //console.log('data', datos)
    return datos.allDatoCmsPortafolio.nodes.map(portafolio => ({
        id: portafolio.id,
        title: portafolio.title,
        images : portafolio.images,
        slug: portafolio.slug
    }))
    
}

export default usePortafolios;
