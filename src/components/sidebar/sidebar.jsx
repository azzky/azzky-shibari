import React from 'react'
import Maindata from '../../constants'
import './sidebar.scss'

const Sidebar = (props) => {
    return (
        <div className="social__links">
            <NsfwIcons />
        </div>
    )
}

const NsfwIcons = (props) => (
    <>
    <a href={Maindata.socials.instagram_nsfw} rel="noreferrer" target="_blank" aria-label="instagram link">
        <svg width="24" height="24" className={props.class}>
        <use href="#instagram"></use>
        </svg>
    </a>
    <a href={Maindata.socials.telegram} rel="noreferrer" target="_blank" aria-label="telegram link">
        <svg width="24" height="24" className={props.class}>
        <use href="#telegram"></use>
        </svg>
    </a>
    <a href={Maindata.socials.twitter} rel="noreferrer" target="_blank" aria-label="twitter link">
        <svg width="24" height="24" className={props.class}>
        <use href="#twitter"></use>
        </svg>
    </a>
    </>
)

export { Sidebar, NsfwIcons }
