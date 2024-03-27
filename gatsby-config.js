/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "canodelacuadra.dev",
    description: "Plataforma para instruir en desarrollo web",
      twitterUsername: `@canodelacuadra`,
    image: `/images/icon.png`,
    siteUrl: `https://canodelacuadra.github.io`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
     {
     resolve: "gatsby-source-filesystem",
     options: {
       name: `blog`,
       path: `${__dirname}/blog`,
     }
    },
   
    "gatsby-plugin-mdx",
     "gatsby-transformer-sharp",

  ],
};
