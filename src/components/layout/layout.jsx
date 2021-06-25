import React, {useState} from "react"
import Sprite from '../svg-sprite'
import Header from "../header/header"
import Footer from '../footer/footer'
import { Helmet } from "react-helmet"
import Maindata from "../../constants"

import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/900.css'
import './layout.scss'

const Layout = (props) => {
  const {
    heroType,
    hero: isHero,
    classes,
    lang,
    url,
    pageNsfw,
    toggleNsfw
  } = props;
  
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
      <Header lang={lang} url={url} post={props.post} pageNsfw={pageNsfw} toggleNsfw={toggleNsfw} />
      <main className={`main ${classes ? '' + classes + ' ' : ''}${!isHero ? '' : 'hero'} ${heroType === 'video' ? ' video': ' image'}`}>
        <div className="content">
          {props.children}
        </div>
      </main>
      <Footer lang={lang} />
    </>
)}

export default Layout