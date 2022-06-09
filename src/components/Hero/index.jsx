import React from "react"
import { Link } from "gatsby"
import { data } from "./social-link"

export default function Hero() {
  return (
    <div>
      <h3>Eu sou Ricardo</h3>
      <span>Desenvolvedor front end e mobile</span>
      <Link to="/Contact" type="button">
        Contata-me
      </Link>
      <article>
        {data.map(it => (
          <li key={it.id}>
            <a href={it.link}>{it.icon}</a>
          </li>
        ))}
      </article>
    </div>
  )
}
