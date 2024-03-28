import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const WordpressPage = ({ data }) => {
// funcion para limpiar tags html
   const removeTags = (string) => {
  return string.replace(/<[^>]+>/g, "");
};


 return (
     <Layout pageTitle="Mis publicaciones en Wordpress">
         
     
     {
        data.allWpPost.nodes.map((node) => (
            <article key={node.id}>
               
                <p>publicado en {node.date}</p>
            <h2>
             
             
               {node.title}
           
             
                </h2>
                <img width='25%' src={node.featuredImage?.node?.link} alt={node.featuredImage?.node?.title} />
                
                <p>
                    { removeTags(node.excerpt)}
                  
                </p>
          
         </article>
       ))

     }
    

   </Layout>
 )
}
export const query = graphql`
query {
  allWpPost {
    nodes {
      id
      slug
      title
      excerpt
      date(formatString: "DD-MM-YYYY")
      featuredImage {
        node {
          link
          title
        }
      }
    }
  }
}
`
export const Head = ({ data }) => <Seo title={data.allWpPost.title} />
export default WordpressPage