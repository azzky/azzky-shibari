import React, {useState} from "react"
import { Link } from "gatsby"
import LangSwitcher from "../lang-switcher"
import NsfwSwitcher from "../toggler/toggler"
import { Sidebar } from "../sidebar/sidebar"
import { getToken } from '../../firebase'

import './header.scss'
import './setting-block.scss'

const Header = (props) => {
  const menuItems = [
    {
      name: 'home',
      runame: 'главная',
      link: '/'
    },
    {
      name: 'contacts',
      runame: 'контакты',
      link: '/contact'
    }
  ]
  const [showMenu, toggleMenu] = useState(false)
  const [showSettings, toggleSettings] = useState(false)
  let savedSubsciption = false
  if(typeof window !== 'undefined' && localStorage !== 'undefined' && localStorage.getItem('subscribed')) {
    savedSubsciption = true
  }
  const [isTokenFound, setTokenFound] = useState(savedSubsciption)
  const allowNotifications = () => {
    localStorage.setItem('subscribed', true)
    getToken(setTokenFound)
  }

  let lang = ''
  if(props.lang === 'ru') {
    lang = '/ru'
  }
  return(
    <header className={`header${showMenu ? ' active' : ''}${showSettings ? ' active' : ''}`}>
      <Link to={`${lang}/`} className="logo__wrapper">
        <img className="logo" src="/logo.svg" alt="logo" width="81" height="17" />
      </Link>
      <nav className="nav">
        <button type="button" aria-controls="menu__list"
        aria-expanded={showMenu} aria-label="menu button"
        className={`menu__button ${showMenu ? 'active' : ''}`}
        onClick={() => toggleMenu((prev) => !prev)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div id="menu__list" className={`menu__list ${showMenu ? 'active' : ''}`}>
          <ul // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          role="menu">
          {menuItems.map((el, i) => (
            <li key={i} className="menu__item" role="none">
              <Link to={lang + el.link} activeClassName="active" role="menuitem">
                <svg width="24" height="24">
                <use href={`#${el.name}`}></use>
                </svg>
                <span className="menu__label">{lang === '/ru' ? el.runame :el.name}</span>
              </Link>
            </li>
          ))}
          </ul>
        </div>
      </nav>
      <section className="settings__wrapper">
        <button type="button" className="settings__trigger" aria-label="setings button"
        onClick={() => toggleSettings((prev) => !prev)}>
          <svg width="24" height="24">
            <use href="#settings"></use>
          </svg>
        </button>
        <div className={`settings__block${showSettings ? ' active' : ''}`}>
          <LangSwitcher lang={props.lang} url={props.url} post={props.post} />
          <hr />
          <Sidebar nsfw={props.nsfw} />
          <hr />
          <NsfwSwitcher />
          <hr />
          <div className="subscription">
          {isTokenFound && <p>Notification permission enabled - thank you!</p>}
          {!isTokenFound && <p>Please, enable permission to get notifications about new posts</p>}
          {!isTokenFound && <button className="subscription__button" onClick={() => allowNotifications()}>Allow now</button>}
          </div>
        </div>
      </section>
    </header>
)}

export default Header