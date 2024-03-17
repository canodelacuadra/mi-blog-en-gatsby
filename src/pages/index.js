import * as React from 'react'
import Layout from '../components/layout' 
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
 return (
   <Layout  pageTitle="Inicio">
     <p>Este será nuestro futuro sitio web en el que crearemos un blog con Gatsby</p>
      <StaticImage
       alt="Un tandem de exploradores"
       src="../images/tandem.jpg"
     />

   </Layout>
 )
}


export const Head = () => <Seo title='Home Page'/>


export default IndexPage
