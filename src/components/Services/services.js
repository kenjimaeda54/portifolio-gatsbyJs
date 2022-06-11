import React from "react"
import { FaCode, FaApple, FaAtom } from "react-icons/fa"
import * as Styles from "./styles.module.css"

export const services = [
  {
    id: 1,
    icon: <FaCode size={25} className={Styles.icon} />,
    description:
      "Desenvolvimento de sites usando tecnologias atuais do mercado. Habilidade desenvolver arquitetura micro front end com module federation, sites estáticos com Gatsby e ricos em inteiração com React.",
    title: "Web Development",
  },
  {
    id: 2,
    icon: <FaApple size={25} className={Styles.icon} />,
    description:
      "Desenvolvimento IOS. Habilidade em desenvolver aplicativos moveis utilizando Swift, CI/CD com git hub actions e microsoft app center,gerenciamento de dependências é deploy nas lojas da Apple",
    title: "Mobile IOS",
  },
  {
    id: 3,
    icon: <FaAtom size={25} className={Styles.icon} />,
    description:
      "Desenvolvimento hibrido mobile. Habilidade em desenvolver aplicativos moveis híbridos utilizando React Native,gerenciamento dependências é deploy nas lojas da Play Store e Apple Store",
    title: "Mobile Híbridos",
  },
]
