import React from "react"
import ResponsiveGallery from '../masonry-azzky'

// gallery on post page
const PostGallery = (props) => {
    const {
        nsfw: isNsfw,
        gallery,
        pageNsfw,
        nsfwarr
    } = props
    let nsfwArr = []
    
    if(isNsfw) {
        nsfwArr = nsfwarr.split(',')
        nsfwArr = nsfwArr.map((i) => parseInt(i))
    }
    const images = []
    gallery.map((item, i) => (
        images.push({
            nsfw: nsfwArr.includes(i + 1),
            data: item.gatsbyImageData,
            full: item.file.url,
            number: i + 1,
            title: props.title
        })
    ))

    return(
        <ResponsiveGallery pageNsfw={pageNsfw}
                           images={images}
                           useLightBox={true}
                           hover={false}
                           isPost={true}
                           filters={false} />
    )
}

//gallery on post type page (shibari, photo etc)
const PostsGallery = (props) => {
    const {
        edges,
        classes,
        lang,
        filter,
        pageNsfw
    } = props
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
        <ResponsiveGallery pageNsfw={pageNsfw}
                           images={images}
                           useLightBox={false}
                           useLinks={true}
                           filters={true}
                           lang={lang}
                           classes={classes}
                           hover={true}
                           filter={filter}
        />
    )
}

export { PostGallery, PostsGallery };