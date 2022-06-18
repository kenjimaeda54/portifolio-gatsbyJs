import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import * as Styles from "./styles.module.css"

export default function About({ data }) {
  const {
    strapiAbout: { image, stack, title, info },
  } = data
  const pathImage = getImage(image[0].localFile.childImageSharp)

  return (
    <div className={Styles.container}>
      <section className={Styles.sectionImage}>
        <GatsbyImage
          image={pathImage}
          className={Styles.aboutImage}
          alt={title}
        />
      </section>
      <section className={Styles.content}>
        <div className={Styles.wrapTitle}>
          <h3>{title}</h3>
          <div className={Styles.underline} />
        </div>
        <p>{info}</p>
        <ul className={Styles.stack}>
          {stack.map(it => (
            <div key={it.id}>
              <li className={Styles.stackTitle}>{it.title}</li>
            </div>
          ))}
        </ul>
      </section>
    </div>
  )
}

export const query = graphql`
  {
    strapiAbout {
      title
      info
      stack {
        id
        title
      }
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`
