import React from "react"
import { data } from "../Hero/social-link"
import * as Styles from "./styles.module.css"

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <ul>
        {data.map(it => (
          <li key={it.id}>
            <a className={Styles.icon}>{it.icon}</a>
          </li>
        ))}
      </ul>
      <span>
        Copyright&copy;{new Date().getFullYear()}
        <span tintcolor="true">Portfolio</span> Todos direitos reservados
      </span>
    </footer>
  )
}
