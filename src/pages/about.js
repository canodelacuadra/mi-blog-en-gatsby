import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
 return (
   <Layout pageTitle="About Me">
     <p>Estoy creando este sitio con Gatsby.</p>
   </Layout>
 )
}



export const Head = () => <Seo title='Acerca de mí'/>


export default AboutPage
