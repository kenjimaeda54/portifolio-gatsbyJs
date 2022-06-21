import React from "react"
import { graphql } from "gatsby"
import Projects from "../../components/Projects"
import Seo from "../../components/Seo"

export default function Project({ data }) {
  const {
    allStrapiProjects: { nodes },
  } = data
  return (
    <>
      <Seo title="Projetos" />
      <Projects projects={nodes} title="Todos Projetos" />
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        github
        description
        slug
        title
        stack {
          id
          title
        }
        url
        featured
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
