import * as React from 'react'
import Layout from '../components/layout' 
import { StaticImage } from 'gatsby-plugin-image'

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


export const Head = () => <title>Inicio</title>


export default IndexPage
