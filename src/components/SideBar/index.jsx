import React from "react"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
import { data as link } from "../NavBar/links"
import { data as socialLink } from "../Hero/social-link"
import * as Styles from "./styles.module.css"

export default function SideBar({ toggleNavBar }) {
  return (
    <div className={Styles.container}>
      <button onClick={toggleNavBar} className={Styles.wrapIcon}>
        <FaTimes size={30} className={Styles.icon} />
      </button>
      <section className={Styles.wrapContent}>
        <nav>
          <ul>
            <li>
              {/*se nao colocar esse onClick vai mudar de pagina mas continuar o navBar aberto*/}
              {link.map(it => (
                <Link onClick={toggleNavBar} to={it.link}>
                  {it.name}
                </Link>
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
