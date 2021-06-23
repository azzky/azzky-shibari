import React from 'react'
import Maindata from '../../constants'
import { Wrapper } from './styled'

const Sidebar = () => {
    return (
        <Wrapper>
            <NsfwIcons />
        </Wrapper>
    )
}

const NsfwIcons = () => {
    const socialArray = ['instagram', 'telegram', 'twitter']
    return(
    <>
    {socialArray.map((item)=>(
        <a href={Maindata.socials[item]} rel="me noreferrer" target="_blank" aria-label={`${item} link`}>
            <svg width="24" height="24">
            <use href={`#${item}`}></use>
            </svg>
        </a>
    ))}
    </>
    )
}

export { Sidebar, NsfwIcons }
