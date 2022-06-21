import React from "react"
import { graphql } from "gatsby"
import * as Styles from "./styles.module.css"
import Seo from "../../components/Seo"

export default function ProjectsTemplate({
  pageContext: { title },
  data: { strapiProjects },
}) {
  return (
    <div className={Styles.container}>
      <Seo title={title.replace(/&/gi, " ")} />
      <h1>{title.replace(/&/gi, " ")}</h1>
      <div className={Styles.wrapDescription}>
        <p>{strapiProjects.description}</p>{" "}
      </div>
    </div>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProjects(title: { eq: $title }) {
      title
      description
    }
  }
`
