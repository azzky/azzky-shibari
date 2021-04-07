import React from "react"
import './gallery.scss'
import ResponsiveGallery from '../masonry-azzky'

// gallery on post page
const PostGallery = (props) => {
    const isNsfw = props.nsfw
    const gallery = props.gallery
    let nsfwArr = []
    
    if(isNsfw) {
        nsfwArr = props.nsfwarr.split(',')
        nsfwArr = nsfwArr.map((i) => parseInt(i))
    }
    const images = []
    for (let i = 0; i < (gallery.length); i++) {
        images.push(
            {
                nsfw: nsfwArr.includes(i + 1),
                data: gallery[i].gatsbyImageData,
                full: gallery[i].file.url,
                number: i + 1,
                title: props.title
            }
        )
    }

    return(
        <ResponsiveGallery images={images} useLightBox={true} hover={false} filters={false} />
    )
}

//gallery on post type page (shibari, photo etc)
const PostsGallery = (props) => {
    const edges = props.edges
    const classes = props.classes
    const lang = props.lang
    const filter = props.filter
    const images = []

    edges.map((i) => {
        let prefix = '/'
        if(lang === 'ru') {
            prefix = '/ru/'
        }
        images.push(
            {
                nsfw: i.node.isPrevNsfw === true ? true : false,
                url: prefix + i.node.type.type + i.node.link,
                data: i.node.preview.gatsbyImageData,
                tags: i.node.tags,
                type: i.node.type.type,
                title: i.node.title
            }
        )
        return null
    })
    return(
        <ResponsiveGallery images={images} useLightBox={false} useLinks={true}
        filters={true} lang={lang} classes={classes} hover={true} filter={filter}
        />
    )
}

export {PostGallery, PostsGallery};