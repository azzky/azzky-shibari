/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout/layout"
import {MetaHome} from '../components/meta/meta'
import {PostsGallery} from '../components/gallery/gallery'
import {PageData} from "../constants"
import useCenzorship from '../hooks/useCenzorship'
import config from '../components/meta/config'

import {
  HeroWrapper,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroVideoWrapper,
  HeroVideo
} from '../components/layout/styled'

const Shibari = () => {
  const data = PageData.ru.shibari

  const { pageNsfw, toggleNsfw } = useCenzorship()

  return(
  <StaticQuery
    query={graphql`
    {
      allContentfulPost(sort: {order: DESC, fields: date}, filter: {node_locale: {eq: "ru"}, type: {type: {eq: "shibari"}}}) {
        edges {
          node {
            id
            title
            link
            nsfw
            isPrevNsfw
            content {
              childMarkdownRemark {
                html
              }
            }
            preview {
              gatsbyImageData(
                width: 400
                quality: 100
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
            tags
            type {
              type
            }
          }
        }
      }
    }
    `}
    render={({ allContentfulPost: { edges } }) => (
    <Layout toggler={true}
              hero={true}
              dark={true}
              heroType="video"
              classes="shibari"
              lang="en"
              url="/ru"
              pageNsfw={pageNsfw}
              toggleNsfw={toggleNsfw}>
        <MetaHome data={data} />
        <HeroWrapper>
          <HeroContent>
            <HeroTitle>{data.h1}</HeroTitle>
            <HeroDescription>
              <p>{data.text} <Link to="/contact">свяжись со мной!</Link></p>
            </HeroDescription>
          </HeroContent>
          <HeroVideoWrapper>
          <HeroVideo autoPlay loop={true}
                         muted={true}
                         playsInline
                         id="background-video"
                         poster={config.videoThumb}>
                {config.videoFormats.map(format => {
                  return <source src={`/${config.videoFileName}.${format}`} type={`video/${format}`} />
                })}
                </HeroVideo>
          </HeroVideoWrapper>
        </HeroWrapper>
        <PostsGallery pageNsfw={pageNsfw} edges={edges} lang="ru" />
      </Layout>
    )}/>
)}

export default Shibari