import React from "react"
import NavBar from "../NavBar"
import Footer from "../Footer"
import "../../global/reset.css"
import "../../global/theme.css"
import * as Styles from "./styles.module.css"
import SideBar from "../SideBar"

export default function Layout({ children }) {
  const isOpenNavBar = true
  return (
    <main className={Styles.container}>
      {isOpenNavBar ? (
        <SideBar />
      ) : (
        <>
          <NavBar />
          {children}
          <Footer />
        </>
      )}
    </main>
  )
}
