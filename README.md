## Portfolio
[Portfolio](https://portfolio-kvm.netlify.app/)  criado em Gatsby

## Motivacao
Aprender novos recursos no uso de Gatsby e divulgar meus trabalhos

## Feature
- Para compartilhar o layout com aplicação toda usei o [gatsby-browser](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/)
- Com esta abordagem componente que eu escolher sera envolvido na aplicação toda
- CMS usado para aplicação foi o Strapi, apos finalizado no ambiente desenvolvimento precisa realizar o deploy individualmente no ambiente de prod
- Além do deploy e necessário no Strapi preparar ele com o [cloudinary](https://cloudinary.com/) para deploy das imagens
- Para uso do cloudinary pode utilizar esse [post](https://strapi.io/blog/add-cloudinary-support-to-your-strapi-application) como referência
```javascript
const React = require("react")
const Layout = require("./src/components/Layout").default

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

// config

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Awesome  Portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s |  Portfolio`,
    url: `https://portfolio-kvm.netlify.app`,
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


```



