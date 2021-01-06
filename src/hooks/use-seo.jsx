import { graphql, useStaticQuery } from 'gatsby';

const useSeo = () => {
    const data = useStaticQuery(graphql`
        query{
            datoCmsSite{
                globalSeo{
                siteName,
                titleSuffix,
                fallbackSeo{
                    title,
                    description
                },
                twitterAccount,
                facebookPageUrl
                }
            }
        }
    
    `);
    //console.log('data', data);
    return data.datoCmsSite.globalSeo;
}
 
export default useSeo;

