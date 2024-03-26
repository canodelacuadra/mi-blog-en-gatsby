import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
 container,
  heading,
  siteTitle,
 subTitle,
 navLinks,
 navLinkItem,
 navLinkText
} from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
   query {
     site {
       siteMetadata {
         title,
         description
       }
     }
   }
 `)

 return (
   <div className={container}>
     <header>
       <h1 className={siteTitle}>{data.site.siteMetadata.title}</h1>
       <h2 className={subTitle}>{data.site.siteMetadata.description }</h2>
     </header>
     <nav>
       <ul className={navLinks}>
         <li className={navLinkItem}>
           <Link to="/" className={navLinkText}>
             Home
           </Link>
         </li>
         <li className={navLinkItem}>
           <Link to="/about" className={navLinkText}>
             About
           </Link>
         </li>
         <li className={navLinkItem}>
           <Link to="/blog" className={navLinkText}>
             Blog
           </Link>
         </li>
         <li className={navLinkItem}>
           <Link to="/portfolio" className={navLinkText}>
             Portfolio
           </Link>
         </li>
         

       </ul>
     </nav>
     <main>
       <h1 className={heading}>{pageTitle}</h1>
       {children}
     </main>
   </div>
 )
}


export default Layout


