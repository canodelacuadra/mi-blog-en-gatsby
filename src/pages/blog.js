import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'


const BlogPage = ({data}) => {
 return (
   <Layout pageTitle="Mis publicaciones">
     
     {
        data.allMdx.nodes.map((node) => (
         <article key={node.id}>
           <h2>{node.frontmatter.title}</h2>
            <p>Publicado el : {node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
         </article>
       ))

     }
    

   </Layout>
 )
}
export const query = graphql`
 query {
   allMdx(sort: { frontmatter: { date: DESC }}) {
     nodes {
       frontmatter {
         date(formatString: "MMMM D, YYYY")
         title
       }
       id
       excerpt
     }
   }
 }

`

export const Head = () => <Seo title="Mi Blog de Tecnología" />


export default BlogPage
