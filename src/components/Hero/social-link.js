import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import * as Styles from "./styles.module.css"

export const data = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/kenjimaeda54",
    icon: <AiFillGithub size={35} />,
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kenjimaeda1233/",
    icon: <AiFillLinkedin size={35} />,
  },
]
