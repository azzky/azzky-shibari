import React from "react"
import { useLocation } from "@reach/router"

import {
    FacebookShareButton,
    PinterestShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    VKShareButton
} from "react-share"

import './share.scss'

const Share = (props) => {
    const title = props.title
    const { href } = useLocation()
    const image = props.preview


    return(
        <div className="react-share__group">
            <p className="react-share__label">{'Share via: '}</p>
            <FacebookShareButton quote={title} url={href}>
                <svg width="24" height="24">
                <use href="#facebook"></use>
                </svg>
            </FacebookShareButton>
            <PinterestShareButton description="awesome shibari I found" media={image} url={href}>
                <svg width="24" height="24">
                <use href="#pinterest"></use>
                </svg>
            </PinterestShareButton>
            <RedditShareButton title={title} url={href}>
            <svg width="24" height="24">
                <use href="#reddit"></use>
                </svg>
            </RedditShareButton>
            <TelegramShareButton title={title} url={href}>
                <svg width="24" height="24">
                <use href="#telegram"></use>
                </svg>
            </TelegramShareButton>
            <TwitterShareButton title={title} related={['@AzzkyDemiurg']} hashtags={props.type === 'Shibari' ? ['shibari', 'bondage'] : []} url={href}>
                <svg width="24" height="24">
                <use href="#twitter"></use>
                </svg>
            </TwitterShareButton>
            <VKShareButton title={title} image={image} url={href} noParse={true}>
            <svg width="24" height="24">
                <use href="#vk"></use>
                </svg>
            </VKShareButton>
        </div>
    )
}

export default Share