import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'


const PortfolioPage = ({ data }) => {
 return (
   <Layout pageTitle="Mi página de portfolio">
      {
       data.allMdx.nodes.map((node) => (
           <article key={node.id}>
                  <p>{node.frontmatter.category}</p>
           <h2>{node.frontmatter.title}</h2>
               <p>{node.frontmatter.date}</p>
               <p>{node.excerpt}</p>
         </article>
       ))
     }
   </Layout>
 )
}

export const query = graphql`
 query {
    allMdx(filter: {frontmatter: {category: {eq: "portfolio"}}}) {
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
export const Head = () => <Seo title="Mi página de Portfolio" />


export default PortfolioPage