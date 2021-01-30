import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Maindata from '../../constants'

import './styles.scss'

const Switcher = (props) => {
    const origin = Maindata.url
    const url = props.url
    const postPrefix = props.post === true ? '/shibari' : ''
    let locale
    
    if(props.lang === 'ru') {
        locale = 'ru'
    } else {
        locale = 'en'
    }
    return(
    <>
    <Helmet htmlAttributes={{ lang: locale }}>
        <meta charSet="utf-8" />
    </Helmet>
    <div className="language__list">
        <Link to={props.lang !== 'ru' ? origin + url : origin + postPrefix + url.replace('/ru/', '/')} className={`language__item${props.lang !== 'ru' ? ' active' : ''}`}>en</Link>
        <Link to={props.lang === 'ru' ? origin + url : origin + '/ru' + postPrefix + url} className={`language__item${props.lang === 'ru' ? ' active' : ''}`}>ru</Link>
    </div>
    </>
)}

export default Switcher