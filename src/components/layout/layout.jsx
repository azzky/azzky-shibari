import React from "react"
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
  const heroType = props.heroType
  const isHero = props.hero
  const light = props.light
  const classes = props.classes
  const lang = props.lang
  const url = props.url
  const schemaLogo = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": Maindata.url,
    "logo": Maindata.url + "/logo.svg"
  }

  if(typeof window !== 'undefined' && light) {
    document.body.classList.add('light')
  }

  if(typeof window !== 'undefined' && !light) {
    document.body.classList.remove('light')
  }

  return(
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaLogo)}</script>
      </Helmet>
      <Sprite/>
      <Header lang={lang} url={url} post={props.post} nsfw={props.nsfw} />
      <main className={`main ${classes ? '' + classes + ' ' : ''}${!isHero ? '' : 'hero'} ${heroType === 'video' ? ' video': ' image'}`}>
        <div className="content">
          {props.children}
        </div>
      </main>
      <Footer lang={lang} />
    </>
)}

export default Layout