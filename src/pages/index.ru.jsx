/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout/layout"
import {MetaPage} from '../components/meta/meta'
import {PostsGallery} from '../components/gallery/gallery'
import {PageData} from "../constants"

import './shibari.scss'

const Shibari = () => {
  const data = PageData.ru.shibari
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
              fluid(quality: 90) {
                ...GatsbyContentfulFluid_withWebp
              }
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
      <Layout toggler={true} hero={true} dark={true} heroType="video" classes="shibari" lang="ru" url="/ru/shibari" nsfw={true}>
        <MetaPage data={data} />
        <div className="hero__wrapper">
          <div className="hero__content">
            <h1 className="hero__title">{data.h1}</h1>
            <div className="hero__description">
              <p>{data.text} <Link to="/contact">свяжись со мной!</Link></p>
            </div>
          </div>
          <div className="video-wrapper">
            <video autoPlay loop={true} muted={true} playsInline id="background-video" poster="/shibari-background.jpg">
              <source src="/background.webm" type="video/webm" />
              <source src="/background.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <PostsGallery classes="shibari" edges={edges} lang="ru" />
      </Layout>
    )}/>
)}

export default Shibari;