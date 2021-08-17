import React, { useState, useReducer, useRef } from "react"
import { Link } from "gatsby"
import ImagesLightBox from "../gallery/lightbox"
import { lightBoxReducer } from "./reducers"
import { GatsbyImage } from "gatsby-plugin-image"
import Filters from "./filters"
import useWidth from "../../hooks/windowsize"
import { HolderSmall } from '../../constants'
import config from "./config"

import "react-image-lightbox/style.css"
import { Gallery, Column, Item } from './styled'

const GalleryItem = ({
    img,
    imgIndex,
    index,
    settings,
    pageNsfw
}) => {
    return (
    settings.useLinks ?
        <Item itemScope
              itemType="http://schema.org/ImageObject">
            <figcaption itemProp="name">
                <Link to={img.url}
                      className="opener"
                      title={!img.nsfw || pageNsfw ? null : config.nsfwText}
                      aria-label={`link to post ${img.title}`}>
                    <span className="visually-hidden">
                        {img.title}
                    </span>
                </Link>
            </figcaption>
            <GatsbyImage itemProp="contentUrl"
                         image={!img.nsfw || pageNsfw ? img.data : HolderSmall} alt={img.title} />
        </Item>
        :
        <Item itemScope
              itemType="http://schema.org/ImageObject">
            <figcaption itemProp="name"
                        className="visually-hidden">
                {`${img.title} ${config.galleryImageMiddleText} ${img.number}`}
            </figcaption>
            <GatsbyImage itemProp="contentUrl"
                         image={!img.nsfw || pageNsfw ? img.data : HolderSmall}
                         alt={`${img.title} ${config.galleryImageMiddleText} ${img.number}`} />
            <button className="opener"
                    title={!img.nsfw || pageNsfw ? null : config.nsfwText}
                    onClick={() =>
                        settings.useLightBox &&
                        settings.lightBoxDispatch({
                            type: "photoIndex_Open",
                            photoIndex:
                                imgIndex === 0
                                    ? index
                                    : index + imgIndex * settings.columnNumber,
                    })}>
                <span className="visually-hidden">
                    {config.imageOpenText}
                </span>
            </button>
        </Item>
    )
}

const GalleryColumn = ({
    column,
    index,
    settings,
    pageNsfw
}) => {
    return (
        <Column key={index}>
            {column.map((img, imgIndex) => (
                <GalleryItem
                    img={img}
                    imgIndex={imgIndex}
                    index={index}
                    settings={settings} key={imgIndex} pageNsfw={pageNsfw} />
                ))}
        </Column>
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
    pageNsfw,
    isPost
}) => {
    const allImages = images
    // start masonry logic here
    const [width] = useWidth()
    let columnNumber = 1
    let getWidth = false

    const setWidth  = () => {
        if (allImages.length < columnNumber) columnNumber = allImages.length
        getWidth = true
    }

    switch (true) {
        case width > config.deviceXL:
            columnNumber = config.deviceXLcolumncount
            setWidth()
            break
        case width > config.deviceL:
            columnNumber = config.deviceLcolumncount
            setWidth()
            break
        case width > config.deviceM:
            columnNumber = config.deviceMcolumncount
            setWidth()
            break
        default:
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
        pageNsfw={pageNsfw}
        />
    )}
    {!isPost &&
        <Filters uniqueArr={uniqueArr}
                 handleFilterChange={handleFilterChange}
                 lang={lang}
                 activeFilter={activeFilterName} />}
    <Gallery columnNumber={columnNumber}
             isPost={isPost}>
        {getWidth && imgSubArray.map((column, index) => (
            <GalleryColumn
                column={column}
                index={index}
                settings={settings}
                key={index}
                pageNsfw={pageNsfw} />
        ))}
    </Gallery>
    </>
}

export default ResponsiveGallery