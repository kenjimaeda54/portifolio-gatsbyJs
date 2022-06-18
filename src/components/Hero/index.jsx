import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { data } from "./social-link"
import * as Styles from "./styles.module.css"

export default function Hero() {
  return (
    <div className={Styles.container}>
      <section className={Styles.section}>
        <article className={Styles.article}>
          <div className={Styles.wrap}>
            <div className={Styles.title}>
              <div className={Styles.underline} />
              <h3>Eu sou Ricardo</h3>
              <span>Desenvolvedor front end e mobile</span>
            </div>
            <Link className={Styles.button} to="/Contact" type="button">
              Contato
            </Link>
            <div className={Styles.dataLink}>
              {data.map(it => (
                <li key={it.id}>
                  <a className={Styles.icon} href={it.link}>
                    {it.icon}
                  </a>
                </li>
              ))}
            </div>
          </div>
        </article>
      </section>
      <div className={Styles.wrapImg}>
        <StaticImage
          src={"../../assets/images/profile.svg"}
          alt="Hero Image"
          className={Styles.hero}
        />
      </div>
    </div>
  )
}
