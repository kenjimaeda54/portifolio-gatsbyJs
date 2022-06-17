import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Jobs from "../components/Jobs"
import Services from "../components/Services"
import Seo from "../components/Seo"
import Projects from "../components/Projects"

export default function Home({ data }) {
  const {
    allStrapiProjects: { nodes },
  } = data
  return (
    <>
      <Seo title="Home" />
      <Hero />
      <Services />
      <Jobs />
      <Projects title="Featured Projects" projects={nodes} />
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
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
