import React, {useState} from "react"
import Logo from './Logo'
import Navigation from './Navigation'
import Settings from "./Settings"
import LangSwitcher from "../lang-switcher"
import NsfwSwitcher from "../toggler/toggler"
import { Sidebar } from "../sidebar/sidebar"
import Push from "../push-notifications"

import {
  HeaderRoot,
} from './styled'

const Header = (props) => {
  const {
    lang,
    pageNsfw,
    toggleNsfw,
    url,
    post
  } = props
  
  const [showMenu, toggleMenu] = useState(false)
  const [showSettings, toggleSettings] = useState(false)
  
  let langStr = ''
  if(lang === 'ru') {
    langStr = '/ru'
  }
  console.log(lang);
  console.log(langStr);

  return(
    <HeaderRoot active={showMenu || showSettings}>
      <Logo langStr={langStr} />
      <Navigation active={showMenu}
                  lang={lang}
                  langStr={langStr}
                  toggleMenu={toggleMenu} />
      <Settings showSettings={showSettings}
                toggleSettings={toggleSettings}>
        <LangSwitcher lang={lang}
                  url={url}
                  post={post} />
        <hr />
        <Sidebar />
        <hr />
        <NsfwSwitcher state={pageNsfw}
                        changeState={toggleNsfw} />
        <hr />
        <Push />
      </Settings>
    </HeaderRoot>
)}

export default Header