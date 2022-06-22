import React from "react"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
import { data as link } from "../NavBar/links"
import { data as socialLink } from "../Hero/social-link"
import * as Styles from "./styles.module.css"

export default function SideBar() {
  return (
    <div className={Styles.container}>
      <section className={Styles.wrapIcon}>
        <FaTimes size={30} className={Styles.icon} />
      </section>
      <section className={Styles.wrapContent}>
        <nav className={Styles.navBar}>
          <ul>
            <li>
              {link.map(it => (
                <Link to={it.link}>{it.name}</Link>
              ))}
            </li>
          </ul>
        </nav>
        <article className={Styles.social}>
          {socialLink.map(it => (
            <a href={it.link}>{it.icon}</a>
          ))}
        </article>
      </section>
    </div>
  )
}
