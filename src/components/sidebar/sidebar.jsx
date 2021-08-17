import React from 'react'
import Maindata from '../../constants'
import { Wrapper } from './styled'

const Sidebar = (props) => {
    const { isBig } = props

    return (
        <Wrapper isBig={isBig}>
            <NsfwIcons isBig={isBig} />
        </Wrapper>
    )
}

const NsfwIcons = (props) => {
    const { isBig } = props
    const iconSize = isBig ? 48 : 24
    const socialArray = ['instagram', 'telegram', 'twitter'] // todo

    return(
        <>
        {socialArray.map((item)=>(
            <a key={item}
            href={Maindata.socials[item]}
            rel="me noreferrer"
            target="_blank"
            aria-label={`${item} link`}>
                <svg width={iconSize}
                    height={iconSize}>
                <use href={`#${item}`}></use>
                </svg>
            </a>
        ))}
        </>
    )
}

export { Sidebar, NsfwIcons }
