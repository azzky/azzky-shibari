import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import Maindata from "../../constants"
import config from './config'

const MetaHome = (props) => {
    const href = Maindata.url
    const schemaVideo = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": config.videoName,
        "description": config.videoDescription,
        "thumbnailUrl": config.videoThumb,
        "uploadDate": config.videoDate,
        "duration": config.videoDuration,
        "contentUrl": config.videoUrl
    }
    const schemaBreadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": config.breadcrumbsRoot,
        "item": Maindata.url
        }]
    }
    return(
        <Helmet>
            <title>{props.data.title}</title>
            <meta property="og:type"
                  content="website"></meta>
            <meta name="description"
                  property="description"
                  content={props.data.description} />
            <meta name="og:title"
                  property="og:title"
                  content={props.data.title} />
            <meta name="og:description"
                  property="og:description"
                  content={props.data.description} />
            <meta name="og:image"
                  property="og:image"
                  content={config.videoThumb} />
            <meta name="og:url"
                  property="og:url"
                  content={href} />
            <meta name="twitter:card"
                  property="twitter:card"
                  content="summary_large_image" />
            <meta name="twitter:title"
                  property="twitter:title"content={props.data.title} />
            <meta name="twitter:description"
                  property="twitter:description"
                  content={props.data.description} />
            <meta name="twitter:image"
                  property="twitter:image"content={config.videoThumb} />
            <meta name="vk:image"
                  property="vk:image"
                  content={config.videoThumb} />
            <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
            <script type="application/ld+json">{JSON.stringify(schemaVideo)}</script>
        </Helmet>
    )
}

const MetaPage = (props) => {
    const schemaBreadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": config.breadcrumbsRoot,
        "item": Maindata.url
        },{
        "@type": "ListItem",
        "position": 2,
        "name": props.type,
        "item": Maindata.url + '/' + props.type
        }]
    }

    return(
        <Helmet>
            <title>{props.data.title}</title>
            <meta name="description" content={props.data.description} />
            <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        </Helmet>
    )
}

const MetaPost = (props) => {
    const post = props.post
    let date = post.date.split('/')
    const image = post.wallpaper ? post.wallpaper.file.url : post.preview.file.url
    date = `20${date[0]}-${date[1]}-${date[2]}T08:00:00+08:00`
    const { href } = useLocation()
    const schemaImage = {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "contentLocation": config.location,
        "contentUrl": image,
        "datePublished": date.split('T')[0],
        "description": !post.metadescription ? post.description : post.metadescription,
        "name": !post.metatitle ? post.title : post.metatitle
    }
    if(post.photographer) {
        schemaImage.author = post.photographer.name
    }
    const schemaArticle = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": !post.metatitle ? post.title : post.metatitle,
        "author": Maindata.author,
        "image": [
            post.preview.file.url
        ],
        "datePublished": date,

    }
    const schemaBreadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": config.breadcrumbsRoot,
        "item": Maindata.url
        },{
        "@type": "ListItem",
        "position": 2,
        "name": post.type.type,
        "item": Maindata.url + '/' + post.type.type
        },{
        "@type": "ListItem",
        "position": 3,
        "name": !post.metatitle ? post.title : post.metatitle
        }]
    }

    return(
        <Helmet>
            <title>{!post.metatitle ? post.title : post.metatitle}</title>
            <meta property="og:type"
                  content="article"></meta>
            <meta name="description"
                  property="description"
                  content={post.metadescription} />
            <meta name="og:title"
                  property="og:title"
                  content={!post.metatitle ? post.title : post.metatitle} />
            <meta name="og:description"
                  property="og:description"
                  content={post.metadescription} />
            <meta name="og:image"
                  property="og:image"
                  content={image} />
            <meta name="og:url"
                  property="og:url"
                  content={href} />
            <meta name="twitter:card"
                  property="twitter:card"
                  content="summary_large_image" />
            <meta name="twitter:title"
                  property="twitter:title"
                  content={!post.metatitle ? post.title : post.metatitle} />
            <meta name="twitter:description"
                  property="twitter:description"
                  content={post.metadescription} />
            <meta name="twitter:image"
                  property="twitter:image"
                  content={image} />
            <meta name="vk:image"
                  property="vk:image"
                  content={image} />
            <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>
            <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
            <script type="application/ld+json">{JSON.stringify(schemaImage)}</script>
        </Helmet>
    )
}

export {MetaPost, MetaPage, MetaHome}