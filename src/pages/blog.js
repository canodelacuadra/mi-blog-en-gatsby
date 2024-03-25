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
             <p>{node.frontmatter.category}</p>
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
    allMdx(filter: {frontmatter: {category: {eq: "blog"}}}) {
    nodes {
      frontmatter {
        title
        date(formatString: "DD-MM-YYYY")
        category
       
      }
      id
      excerpt
    }
  }
 }
 `



export const Head = () => <Seo title="Mi Blog de Tecnología" />


export default BlogPage
