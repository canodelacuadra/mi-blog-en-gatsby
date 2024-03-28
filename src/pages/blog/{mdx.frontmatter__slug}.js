import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// gatsby-browser.js
import "prismjs/themes/prism-solarizedlight.min.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

import Seo from '../../components/seo'
const BlogPost = ({ data, children }) => {
   const image = getImage(data.mdx.frontmatter.hero_image)
 return (
   <Layout pageTitle={data.mdx.frontmatter.title}>
     <p>{data.mdx.frontmatter.date}</p>
       <GatsbyImage
     image={image}
     alt={data.mdx.frontmatter.hero_image_alt}
   />
     {children}
   </Layout>
 )
}
export const query = graphql`
 query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />
export default BlogPost

