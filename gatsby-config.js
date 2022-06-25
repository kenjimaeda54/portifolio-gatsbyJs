/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Awesome WebDev Portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s |  Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Merriweather",
              variants: ["300", "400", "500", "700"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://portfolio-kvm.herokuapp.com`,
        queryLimit: 1000,
        collectionTypes: [`Jobs`, `Projects`],
        singleTypes: [`About`],
      },
    },
  ],
}
