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
import config from "./config"

import Wrapper from './styled'

const Share = (props) => {
    const { href } = useLocation()
    const { title, preview: image, lang } = props
    const size = config.iconSize

    return(
        <Wrapper>
            <p>{config.title[lang]}</p>
            <FacebookShareButton quote={title}
                                 url={href}>
                <svg width={size}
                     height={size}>
                    <use href="#facebook"/>
                </svg>
            </FacebookShareButton>
            <PinterestShareButton description={config.pinterestText[lang]}
                                  media={image}
                                  url={href}>
                <svg width={size}
                     height={size}>
                    <use href="#pinterest"/>
                </svg>
            </PinterestShareButton>
            <RedditShareButton title={title}
                                url={href}>
                <svg width={size}
                     height={size}>
                    <use href="#reddit"/>
                </svg>
            </RedditShareButton>
            <TelegramShareButton title={title}
                                 url={href}>
                <svg width={size}
                     height={size}>
                    <use href="#telegram"/>
                </svg>
            </TelegramShareButton>
            <TwitterShareButton title={title}
                                related={config.related}
                                hashtags={props.type === 'Shibari' ? ['shibari', 'bondage'] : []}
                                url={href}>
                <svg width={size}
                     height={size}>
                    <use href="#twitter"/>
                </svg>
            </TwitterShareButton>
            <VKShareButton title={title}
                           image={image}
                           url={href}
                           noParse={true}>
                <svg width={size}
                     height={size}>
                    <use href="#vk"/>
                </svg>
            </VKShareButton>
        </Wrapper>
    )
}

export default Share