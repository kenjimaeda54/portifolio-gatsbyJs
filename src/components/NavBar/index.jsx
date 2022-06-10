import React from "react"
import logo from "../../assets/images/logo.svg"
import { FaAlignCenter } from "react-icons/fa"
import { data } from "./links"
import { Link } from "gatsby"
import * as Styles from "./styles.module.css"

export default function NavBar() {
  return (
    <nav className={Styles.navigation}>
      <img src={logo} alt="logo nav bar" />
      <ul className={Styles.list}>
        {data.map(it => (
          <li key={it.id}>
            <Link to={it.link}>{it.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
