import * as React from 'react'
import Layout from '../components/layout'


const AboutPage = () => {
 return (
   <Layout pageTitle="About Me">
     <p>Estoy creando este sitio con Gatsby.</p>
   </Layout>
 )
}


export const Head = () => <title>Acerca de mí</title>


export default AboutPage
