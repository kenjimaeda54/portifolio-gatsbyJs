import React, { Fragment } from "react"
import Project from "../Project"
import * as Styles from "./styles.module.css"

export default function Projects({ projects, title }) {
  return (
    <article className={Styles.container}>
      <div className={Styles.wrapTitle}>
        <h1>{title}</h1>
        <div className={Styles.underlineTitle} />
      </div>
      <div className={Styles.project}>
        {projects.map((it, index) => (
          <Fragment key={it.id}>
            <Project content={it} index={index} />{" "}
          </Fragment>
        ))}
      </div>
    </article>
  )
}
