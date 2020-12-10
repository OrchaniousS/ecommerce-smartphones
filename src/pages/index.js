import React from "react"
import SEO from "../Layouts/SEO"
import Header from "../Layouts/Header"

import SmartPhones from "../components/smartphones/smartPhones"
import "../style/index.css"

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <SmartPhones />
    </>
  )
}
