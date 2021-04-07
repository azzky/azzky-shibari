import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Maindata from '../../constants'

import * as styles from './styles.module.scss'

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
    <div className={styles.list}>
        <Link to={props.lang !== 'ru' ? origin + url : origin + postPrefix + url.replace('/ru', '')} className={`${styles.item} ${props.lang !== 'ru' ? styles.active : ''}`}>en</Link>
        <Link to={props.lang === 'ru' ? origin + url : origin + '/ru' + postPrefix + url} className={`${styles.item} ${props.lang === 'ru' ? styles.active : ''}`}>ru</Link>
    </div>
    </>
)}

export default Switcher