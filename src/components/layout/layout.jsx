import React from "react"
import Sprite from '../svg-sprite'
import Header from "../header/header"
import Footer from '../footer/footer'
import { Helmet } from "react-helmet"
import Maindata from "../../constants"

import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/900.css'
import { Main } from './styled'

const Layout = (props) => {
  const {
    hero: isHero,
    lang,
    url,
    pageNsfw,
    toggleNsfw,
    is404
  } = props
  
  const schemaLogo = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": Maindata.url,
    "logo": Maindata.url + "/logo.svg"
  }

  return(
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaLogo)}</script>
      </Helmet>
      <Sprite/>
      <Header lang={lang}
      url={url}
      post={props.post}
      pageNsfw={pageNsfw}
      toggleNsfw={toggleNsfw} />
      <Main isHero={isHero}>
        <div>
          {props.children}
        </div>
      </Main>
      <Footer lang={lang}
              is404={is404} />
    </>
)}

export default Layout