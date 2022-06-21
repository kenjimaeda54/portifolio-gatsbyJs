import React from "react"
import { FaAlignRight } from "react-icons/fa"
import { data } from "./links"
import { Link } from "gatsby"
import logo from "../../assets/images/logo.svg"
import * as Styles from "./styles.module.css"

export default function NavBar() {
  return (
    <nav className={Styles.navigation}>
      <img src={logo} alt="logo nav bar" />
      <ul className={Styles.list}>
        {data.map(it => (
          <li className={Styles.desktop} key={it.id}>
            <Link activeClassName={Styles.active} to={it.link}>
              {it.name}
            </Link>
          </li>
        ))}
        <button className={Styles.mobile}>
          <FaAlignRight size={25} className={Styles.iconMobile} />
        </button>
      </ul>
    </nav>
  )
}
