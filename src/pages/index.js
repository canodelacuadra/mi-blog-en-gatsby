import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
 return (
   <Layout  pageTitle="Inicio">
     <p>Este será nuestro futuro sitio web en el que crearemos un blog con Gatsby</p>
   </Layout>
 )
}


export const Head = () => <title>Inicio</title>


export default IndexPage
