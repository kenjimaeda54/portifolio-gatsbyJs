import React from "react"
import NavBar from "../NavBar"
import Footer from "../Footer"
import "../../global/reset.css"
import "../../global/theme.css"
import * as Styles from "./styles.module.css"

export default function Layout({ children }) {
  return (
    <main className={Styles.container}>
      <NavBar />
      {children}
      <Footer />
    </main>
  )
}
