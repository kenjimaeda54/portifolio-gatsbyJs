import React, { Fragment } from "react"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import slugify from "slugify"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as Styles from "./styles.module.css"
import { Link } from "gatsby"

export default function Project({ content, index }) {
  const { title, github, slug, description, url, image, stack } = content
  const pathImage = getImage(image.localFile.childImageSharp)

  return (
    <div className={Styles.container}>
      <GatsbyImage alt={title} image={pathImage} className={Styles.image} />
      <article className={Styles.content}>
        <h3>0{index + 1}.</h3>
        <Link to={`/Projects/${slug}`}>
          <h2>{title.replace(/&/gi, " ")}</h2>
        </Link>
        <p>{description}</p>
        <ul className={Styles.stack}>
          {stack.map(it => (
            <div key={it.id}>
              <li className={Styles.stackTitle}>{it.title}</li>
            </div>
          ))}
        </ul>
        <nav className={Styles.link}>
          <ul>
            <li>
              <a href={github}>
                <FaGithubSquare size={25} className={Styles.icon} />
              </a>
            </li>
            {url && (
              <a href={url}>
                <FaShareSquare size={25} className={Styles.icon} />
              </a>
            )}
          </ul>
        </nav>
      </article>
    </div>
  )
}
