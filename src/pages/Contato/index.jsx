import React, { useState } from "react"
import * as Styles from "./styles.module.css"

export default function Contact() {
  const [valuesInput, setValuesInput] = useState({
    name: "",
    email: "",
    message: "",
  })

  return (
    <div className={Styles.container}>
      <article>
        <h2>Entrar em contato</h2>
        <form
          action="https://formspree.io/f/mjvldgvq"
          method="POST"
          className={Styles.form}
        >
          <div>
            <input name="name" placeholder="NAME" type="text" />
            <input name="email" placeholder="EMAIL" type="email" />
            <textarea name="message" rows="5" placeholder="MESSAGE" />
          </div>
          <button
            disabled={
              valuesInput.email.length === 0 ||
              valuesInput.message.length === 0 ||
              valuesInput.name.length === 0
            }
            type="submit"
          >
            Enviar aqui
          </button>
        </form>
      </article>
    </div>
  )
}
