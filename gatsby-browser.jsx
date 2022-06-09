const React = require("react")
const Layout = require("./src/components/Layout").default
//https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
//com essa abordagem todo Layout esta sendo importado, ou seja, todo Layout esta sendo importado em todas as paginas
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
