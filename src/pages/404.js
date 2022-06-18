import { Link } from "gatsby"
import React from "react"
import * as Styles from "./error.module.css"

export default function ErrorTemplate() {
  return (
    <div className={Styles.container}>
      <h1>Oops isto é um beco sem saída</h1>
      <Link to="/">
        <span className={Styles.titleError}> Voltar ao principal</span>
      </Link>
    </div>
  )
}
