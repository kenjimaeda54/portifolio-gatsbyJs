import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Jobs from "../components/Jobs"
import Services from "../components/Services"

export default function Home({ data }) {
  console.log(data)
  return (
    <>
      <Hero />
      <Services />
      <Jobs />
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
      totalCount
    }
  }
`
