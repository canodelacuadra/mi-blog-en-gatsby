import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Seo from '../../components/seo'


const PortfolioPage = ({data}) => {
 return (
   <Layout pageTitle="Mi portfolio">
     
     {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
             <p>{node.frontmatter.category}</p>
            <h2>
              <Link to={`/portfolio/${node.frontmatter.slug}`}>
               {node.frontmatter.title}
             </Link>
            </h2>
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
    allMdx(filter: {frontmatter: {category: {eq: "portfolio"}}}) {
    nodes {
      frontmatter {
        title
        slug
        date(formatString: "DD-MM-YYYY")
        category
       
      }
      id
      excerpt
    }
  }
 }
 `



export const Head = () => <Seo title="Mi Portfolio de desarrollo" />


export default PortfolioPage
