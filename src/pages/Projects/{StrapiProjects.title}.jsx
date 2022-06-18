import React from "react"
import { graphql } from "gatsby"
import * as Styles from "./styles.module.css"

export default function ProjectsTemplate({
  pageContext: { title },
  data: { strapiProjects },
}) {
  return (
    <div className={Styles.container}>
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
