/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, {useState} from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout/layout"
import {PostGallery} from '../components/gallery/gallery'
import { MetaPost } from '../components/meta/meta'
import Share from '../components/share/share'
import Team from '../components/team/team'
import { Modal, ModalButton } from '../components/modal/modal'
import useCenzorship from '../hooks/useCenzorship'

import { HolderBig } from '../constants'

import {
    HeroWrapper,
    HeroContent,
    HeroTitle,
    HeroDescription,
} from '../components/layout/styled'

const prepareContent = (str) => {
    if(str.includes('<p>')) {
        str = str.replace('<p>','').split('').reverse().join('').replace('>p/<','').split('').reverse().join('')
    }
    if(str.includes('\n')) {
        str = str.replace(/\n/g, '<br/>')
    }

    return str
}

const checkPopupWidth = (popupRatio) => {
    if(typeof document !== 'undefined') {
        const h = document.documentElement.clientHeight
        const w = document.documentElement.clientWidth
        let maximumHeight, popupWidth

        if(h < w || h === w) {
            maximumHeight = h * 0.8
            popupWidth = maximumHeight / (popupRatio.w/popupRatio.h)
        }
        if(h > w) { // mobile
            popupWidth = w
            maximumHeight = w * (popupRatio.w/popupRatio.h)
        }

        return {maximumHeight, popupWidth}
    }
}

const Post = ({
    data: {
        allContentfulPost: {
            edges: [
            {
                node: {
                    link,
                    title,
                    gallery,
                    nsfw,
                    content,
                    model,
                    nawashi,
                    photographer,
                    muah,
                    type,
                    nsfwarr,
                    preview,
                    wallpaper,
                    node_locale: lang,
                    isWallNsfw,
                    popup,
                    popupRatio
                },
                node
            }
            ]
        }
    }
}) => {
    const { pageNsfw, toggleNsfw } = useCenzorship()

    const [isShowModal, showModal] = useState(false)
    let readyData,
        paddingTopValue,
        popupSize

    if(popup) {
        const rawData = popup.raw
        const a = JSON.stringify(rawData)
        const b = JSON.parse(a)
        readyData = JSON.parse(b).content[0].content[0].value

        popupRatio = popupRatio ? {
            h: popupRatio.split('/')[0],
            w: popupRatio.split('/')[1]
        } : 0

        popupSize = checkPopupWidth(popupRatio)

        paddingTopValue = popupRatio && popupSize?.maximumHeight ? `${popupSize.maximumHeight}px` : popupRatio
    }

    const textData = content ? prepareContent(content.childMarkdownRemark.html) : null

    const wallpaperImg = wallpaper ? wallpaper.gatsbyImageData : preview.gatsbyImageData
    
    return (
        <Layout lang={lang}
                hero={true}
                dark={true}
                url={link}
                post={true}
                pageNsfw={pageNsfw}
                toggleNsfw={toggleNsfw}>
            <MetaPost post={node}/>
            <HeroWrapper>
                <HeroContent>
                    <HeroTitle>{title}</HeroTitle>
                    {!content ? null : <HeroDescription>
                    <p>
                        <span dangerouslySetInnerHTML={{ __html: textData }}/>
                        {!popup ? null : <ModalButton showModal={showModal} node_locale={lang} />}
                    </p>
                    </HeroDescription> }
                    {type.type === 'shibari' ? 
                    <Team models={model}
                        nawashi={nawashi}
                        photographer={photographer}
                        muah={muah}
                        lang={lang} />
                    : ''}
                    <Share preview={preview.file.url}
                           title={type.type === 'shibari' ? title + ' shibari by Azzky' : title + ' by Azzky'}
                           lang={lang}
                           type={type.type}/>
                </HeroContent>
                <GatsbyImage image={!isWallNsfw ? wallpaperImg : pageNsfw ? wallpaperImg : HolderBig}
                            className={isWallNsfw ? 'nsfw' : ''}
                            loading="lazy" alt={title} />
            </HeroWrapper>
            <PostGallery pageNsfw={pageNsfw}
                        nsfw={nsfw}
                        title={title}
                        gallery={gallery}
                        nsfwarr={nsfwarr} />
            {!popup ? null :
            <Modal isShowModal={isShowModal}
                    showModal={showModal}
                    paddingTopValue={paddingTopValue}
                    size={popupSize?.popupWidth}
                    pageNsfw={pageNsfw} >
            <div dangerouslySetInnerHTML={{ __html: readyData }}/>
            </Modal>
            }
        </Layout>
    );
}

export const query = graphql`
query($slug: String!, $lang: String!) {
    allContentfulPost(filter: {link: {eq: $slug}, node_locale: {eq: $lang}}) {
        edges {
        node {
            title
            link
            date(formatString: "YY/MM/DD")
            nsfw
            content {
            childMarkdownRemark {
                html
            }
            }
            preview {
            gatsbyImageData(
                quality: 100
                placeholder: BLURRED
                formats: [AUTO, WEBP]
                width: 1920,
                breakpoints: [400, 800, 1080, 1366, 1440, 1920]
            )
            file {
                url
            }
            }
            wallpaper {
            gatsbyImageData(
                quality: 100
                placeholder: BLURRED
                formats: [AUTO, WEBP]
                width: 1920,
                breakpoints: [400, 800, 1080, 1366, 1440, 1920]
            )
            file {
                url
            }
            }
            gallery {
            gatsbyImageData(
                width: 400
                quality: 100
                placeholder: BLURRED
                formats: [AUTO, JPG, WEBP]
            )
            file {
                url
            }
            }
            model {
            name
            url
            }
            photographer {
            name
            url
            }
            muah {
            name
            url
            }
            type {
            type
            }
            metadescription
            metatitle
            nsfwarr
            node_locale
            isWallNsfw
            type {
            type
            }
            popup {
            raw
            }
            popupRatio
        }
        }
    }
}
`

export default Post