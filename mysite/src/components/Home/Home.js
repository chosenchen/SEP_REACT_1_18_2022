import React from 'react'

import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'

import Main from '../Main/Main'
import About from '../About/About'
import Summary from '../Summary/Summary'

export default function Home() {
  return (
      <>
          <Main />
          <About />
          <Summary />
          <Portfolio />
          <Contact />
      </>
    
  )
}
