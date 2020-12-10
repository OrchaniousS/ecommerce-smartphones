import React from "react"

import "../style/header.css"

const HeaderNavigation = () => {
  return (
    <>
      <header>
        <div>
          <h2>
            <a href="/">Header</a>
          </h2>
        </div>
        <div className="cart">cart</div>
      </header>
    </>
  )
}

export default HeaderNavigation
