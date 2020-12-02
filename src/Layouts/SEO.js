import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ smartphoneTitle }) => {
  const smartPhoneTitleHolder = smartphoneTitle ? "| " + smartphoneTitle : ""

  return (
    <>
      <Helmet>
        <title>{"E-Commerce | Smartphones " + smartPhoneTitleHolder}</title>
        <html lang="en" />
        <meta
          name="description"
          content={`${smartPhoneTitleHolder} Page | E-Commerce PWA website for Smartphones. Made with Gatsby, React, PWA(Fully offline support).`}
        />
      </Helmet>
    </>
  )
}

export default SEO
