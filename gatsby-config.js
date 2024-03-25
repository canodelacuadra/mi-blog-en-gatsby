/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "canodelacuadraBlog",
    description: "Sitio de apoyo para instruir en desarrollo web",
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
        {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `portfolio`,
        // Path to the directory
        path: `${__dirname}/portfolio/`,
      },
    },
     "gatsby-plugin-mdx",

  ],
};
