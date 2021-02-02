import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import Maindata from "../../constants"

const MetaHome = (props) => {
    const schemaBreadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Azzky's",
        "item": Maindata.url
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

const MetaPage = (props) => {
    console.log(props.type);
    const schemaBreadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Azzky's",
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
    const image = post.wallpaper ? post.wallpaper.fluid.src : post.preview.fluid.src
    console.log(image);
    date = `20${date[0]}-${date[1]}-${date[2]}T08:00:00+08:00`
    const { href } = useLocation()
    const schemaArticle = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": !post.metatitle ? post.title : post.metatitle,
        "author": Maindata.author,
        "image": [
            post.preview.fluid.src
        ],
        "datePublished": date,

    }
    const schemaBreadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Azzky's",
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
            <meta name="description" property="description" content={post.metadescription} />
            <meta name="og:title" property="og:title" content={!post.metatitle ? post.title : post.metatitle} />
            <meta name="og:description" property="og:description" content={post.metadescription} />
            <meta name="og:image" property="og:image" content={image} />
            <meta name="og:url" property="og:url" content={href} />
            <meta name="twitter:card" property="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" property="twitter:title" content={!post.metatitle ? post.title : post.metatitle} />
            <meta name="twitter:description" property="twitter:description" content={post.metadescription} />
            <meta name="twitter:image" property="twitter:image" content={image} />
            <meta name="vk:image" property="vk:image" content={image} />
            <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>
            <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        </Helmet>
    )
}

export {MetaPost, MetaPage, MetaHome}