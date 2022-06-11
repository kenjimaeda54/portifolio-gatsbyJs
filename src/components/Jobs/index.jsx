import React, { useState } from "react"
import { FaAngleDoubleRight } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import * as Styles from "./styles.module.css"

const query = graphql`
  {
    allStrapiJobs(sort: { order: ASC, fields: order }) {
      nodes {
        id
        date
        company
        position
        description {
          id
          name
        }
      }
    }
  }
`

export default function Jobs() {
  const [value, setValue] = useState(0)
  const { allStrapiJobs } = useStaticQuery(query)
  const { id, date, company, position, description } =
    allStrapiJobs.nodes[value]

  return (
    <article className={Styles.container}>
      <div className={Styles.wrapTitle}>
        <h1>Trabalhos</h1>
        <div className={Styles.underlineTitle} />
      </div>
      <div className={Styles.wrapSection}>
        <section className={Styles.sectionLeft}>
          {allStrapiJobs.nodes.map((it, index) => (
            <button
              className={index === value ? Styles.btnActive : Styles.btnDefault}
              key={it.id}
              onClick={() => setValue(index)}
            >
              {it.company}
            </button>
          ))}
        </section>
        <section className={Styles.sectionRight}>
          <h2>{position}</h2>
          <h3>{company}</h3>
          <span>{date}</span>
          {description.map(it => (
            <div className={Styles.description} key={it.id}>
              <FaAngleDoubleRight size={25} fill="#2caeba" />
              <p>{it.name}</p>
            </div>
          ))}
        </section>
      </div>
    </article>
  )
}
