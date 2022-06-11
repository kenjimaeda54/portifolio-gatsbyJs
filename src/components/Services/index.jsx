import React from "react"
import { services } from "./services"
import * as Styles from "./styles.module.css"

export default function Services() {
  return (
    <article className={Styles.container}>
      <div className={Styles.wrapTitle}>
        <h1>Serviços</h1>
        <div className={Styles.underlineTitle} />
      </div>
      <div className={Styles.wrapServices}>
        {services.map(it => (
          <div key={it.id} className={Styles.card}>
            {it.icon}
            <div className={Styles.wrapSubTitle}>
              <h3>{it.title}</h3>
              <div className={Styles.underlineSubTitle} />
            </div>
            <p>{it.description}</p>
          </div>
        ))}
      </div>
    </article>
  )
}
