import React, { useState, useReducer, useRef } from "react"
import { Link } from "gatsby"
import ImagesLightBox from "../gallery/lightbox"
import { lightBoxReducer } from "./reducers"
import { GatsbyImage } from "gatsby-plugin-image"
import Filters from "./filters"
import useWidth from "./windowsize"
import { HolderSmall } from '../../constants'

import "react-image-lightbox/style.css"

const GalleryItem = ({
    img,
    imgIndex,
    index,
    settings,
    pageNsfw
}) => {
        return (
        settings.useLinks ?
            <figure itemScope itemType="http://schema.org/ImageObject"
            className={`masonry__item${img.nsfw ? ' nsfw' : ''}${settings.hover ? ' hover' : ''}`}>
                <figcaption itemProp="name">
                    <Link to={img.url} className="opener" aria-label={`link to post ${img.title}`}>
                        <span className="visually-hidden">
                            {img.title}
                        </span>
                    </Link>
                </figcaption>
                <GatsbyImage itemProp="contentUrl" image={!img.nsfw || pageNsfw ? img.data : HolderSmall} alt={img.title} />
            </figure>
            :
            <figure itemScope itemType="http://schema.org/ImageObject"
            className={`masonry__item${img.nsfw ? ' nsfw' : ''}${settings.hover ? ' hover' : ''}`}>
                <figcaption itemProp="name" className="visually-hidden">{`${img.title} - gallery image ${img.number}`}</figcaption>
                <GatsbyImage itemProp="contentUrl" image={!img.nsfw || pageNsfw ? img.data : HolderSmall} alt={`${img.title} - gallery image ${img.number}`} />
                <button className="opener"
                onClick={() =>
                    settings.useLightBox &&
                    settings.lightBoxDispatch({
                        type: "photoIndex_Open",
                        photoIndex:
                            imgIndex === 0
                                ? index
                                : index + imgIndex * settings.columnNumber,
                    })}>
                    <span className="visually-hidden">Open full image</span>
                </button>
            </figure>
    )
}

const GalleryColumn = ({
    column,
    index,
    settings,
    pageNsfw
}) => {
    return (
        <div className={`masonry__column ${column.length > 0 ? '' : 'no-display'}`} key={index}>
            {column.map((img, imgIndex) => (
                <GalleryItem
                    img={img}
                    imgIndex={imgIndex}
                    index={index}
                    settings={settings} key={imgIndex} pageNsfw={pageNsfw} />
                ))}
        </div>
    )
}

const ResponsiveGallery = ({
    images,
    useLightBox,
    useLinks,
    hover,
    filters,
    filter,
    lang,
    classes,
    pageNsfw
}) => {
    const allImages = images
    // start masonry logic here
    const [width] = useWidth()
    let columnNumber = 1
    let getWidth = false

    switch (true) {
        case width > 1906:
            columnNumber = 4
            getWidth = true
            break
        case width > 1270:
            columnNumber = 3
            getWidth = true
            break
        case width > 840:
            columnNumber = 2
            getWidth = true
            break
        default:
            columnNumber = 1
            getWidth = true
    }
    
    // end masonry logic here
    
    // start getting unique filters from all posts collected
    let uniqueArr = []
    if(filters && getWidth) {
        let filterArr
        let tagsString
        for (let i = 0; i < allImages.length; i++) {
            if(i > 0) {
                tagsString = tagsString + ', ' + allImages[i].tags
            } else {
                tagsString = allImages[i].tags
            }
            filterArr = tagsString.split(', ')
            uniqueArr = [...new Set(filterArr)]
            uniqueArr = uniqueArr.sort()
        }
    }

    // end getting unique filters from all posts collected
    
    // start filtering logic here
    let localFilter = filter ? filter : 'featured'
    if (typeof window !== 'undefined' && localStorage !== 'undefined') {
        if(localStorage.getItem('filter-' + classes)) {
            localFilter = localStorage.getItem('filter-' + classes)
        }
    }

    const activeFilter = useRef(localFilter)
    const [activeFilterName, setActiveFilter] = useState(activeFilter.current)

    const handleFilterChange = (filter) => {
        setActiveFilter(filter)
        localFilter = filter
        localStorage.setItem('filter-' + classes, localFilter)
    }

    if(filters) {
        const tempArr = [...images]
        images = tempArr.filter((node) => node.tags && node.tags.includes(activeFilterName))
    }

    let imgSubArray = [...Array(columnNumber)].map((_, i) => [])

    for (let i = 0; i < images.length; i++) {
        imgSubArray[(i + columnNumber) % columnNumber].push(images[i])
    }
    // end filtering logic here

    const [lightBoxVal, lightBoxDispatch] = useReducer(lightBoxReducer, {
        photoIndex: 0,
        isOpen: false,
    })

    const settings = {
        hover, useLightBox, lightBoxDispatch, useLinks, columnNumber
    }
    
    return <>
    {useLightBox && lightBoxVal.isOpen && (
    <ImagesLightBox
        imagesLightbox={images}
        photoIndex={lightBoxVal.photoIndex}
        lightBoxDispatch={lightBoxDispatch}
        />
    )}
    <Filters uniqueArr={uniqueArr} handleFilterChange={handleFilterChange} lang={lang} activeFilter={activeFilterName} />
    <section className="masonry__gallery">
        {getWidth && imgSubArray.map((column, index) => (
            <GalleryColumn
                column={column}
                index={index}
                settings={settings} key={index} pageNsfw={pageNsfw} />
        ))}
    </section>
    </>
}

export default ResponsiveGallery