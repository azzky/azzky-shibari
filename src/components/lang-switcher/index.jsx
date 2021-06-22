import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Maindata from '../../constants'

import { Wrapper } from './styled'

const ActiveLink = (props) => {
    return (
        <Link to={props.to}>
            {props.children}
        </Link>
    )
}

const InactiveLink = (props) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a role="link" aria-disabled="true">
            {props.children}
        </a>
    )
}

const Switcher = (props) => {
    const origin = Maindata.url
    const url = props.url
    const postPrefix = props.post === true ? '/shibari' : ''
    let locale
    
    locale = props.lang === 'ru' ? 'ru' : 'en'
    return(
    <>
    <Helmet htmlAttributes={{ lang: locale }}>
        <meta charSet="utf-8" />
    </Helmet>
    <Wrapper>
        {props.lang === 'ru' ? (
        <>
            <ActiveLink to={origin + postPrefix + url.replace('/ru', '')}>en</ActiveLink>
            <InactiveLink>ru</InactiveLink>
        </>
        ) : (
        <>
            <InactiveLink>en</InactiveLink>
            <ActiveLink to={origin + '/ru' + postPrefix + url}>ru</ActiveLink>
        </>
        )}
        
    </Wrapper>
    </>
)}

export default Switcher