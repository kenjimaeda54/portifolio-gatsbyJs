import React, { useState } from "react"
import NavBar from "../NavBar"
import Footer from "../Footer"
import "../../global/reset.css"
import "../../global/theme.css"
import * as Styles from "./styles.module.css"
import SideBar from "../SideBar"

export default function Layout({ children }) {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false)

  const toggleNavBar = () => setIsOpenNavBar(previous => !previous)

  return (
    <main className={Styles.container}>
      {isOpenNavBar ? (
        <SideBar toggleNavBar={toggleNavBar} />
      ) : (
        <>
          <NavBar toggleNavBar={toggleNavBar} />
          {children}
          <Footer />
        </>
      )}
    </main>
  )
}
