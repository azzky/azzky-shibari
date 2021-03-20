/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, {useState} from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout/layout"
import {PostGallery} from '../components/gallery/gallery'
import { MetaPost } from '../components/meta/meta'
import Share from '../components/share/share'
import Team from '../components/team/team'

import './post.scss'
import '../components/modal/modal.scss'

const prepareContent = (str) => {
  if(str.includes('<p>')) {
    str = str.replace('<p>','').split('').reverse().join('').replace('>p/<','').split('').reverse().join('')
  }
  if(str.includes('\n')) {
    str = str.replace(/\n/g, '<br/>')
  }
  
  return str
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
            node_locale,
            isWallNsfw,
            popup
          },
          node
        }
      ]
    }
  }
}) => {
  const [isShowModal, showModal] = useState(false)
  const linkClass = link.replace('/', '')

  if(typeof document !== 'undefined') {
    const bodyClasses = document.body.classList
    bodyClasses.remove(...bodyClasses)
    bodyClasses.add('post','shibari')
  }

  const textData = content ? prepareContent(content.childMarkdownRemark.html) : ''
    
  return (
    <Layout toggler={type.type === 'shibari' ? true : false} lang={node_locale} hero={true} dark={true} url={link} post={true} nsfw={type.type === 'shibari' ? true : false}>
      <MetaPost post={node}/>
      <div className="hero__wrapper">
        <div className="hero__content">
          <h1 className="hero__title">{title}</h1>
          {!content ? '' : <div className="hero__description">
            <p>
              <span dangerouslySetInnerHTML={{ __html: textData }}/>
              {!popup ? '' : <button className="linky" onClick={() => showModal(true)}>{node_locale === 'en-US' ? 'here' : 'тут'}</button>}
            </p>
          </div> }
          {type.type === 'shibari' ? 
          <Team models={model} nawashi={nawashi} photographer={photographer} muah={muah} lang={node_locale} />
          : ''}
          <Share preview={preview.file.url} title={type.type === 'shibari' ? title + ' shibari by Azzky' : title + ' by Azzky'} type={type.type}/>
        </div>
        <GatsbyImage
          image={wallpaper ? wallpaper.gatsbyImageData : preview.gatsbyImageData}
          className={isWallNsfw ? 'nsfw' : ''}
          loading="lazy" />
      </div>
      <PostGallery nsfw={nsfw} title={title} gallery={gallery} nsfwarr={nsfwarr} />
      {!popup ? '' :
      <div role="dialog" className={isShowModal ? 'modal open ' + linkClass : 'modal ' + linkClass} onClick={() => showModal(false)}>
        <div className="modal__content" dangerouslySetInnerHTML={{ __html: popup.raw }} />
      </div>}
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
              width: 1920
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
              width: 1920
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
              formats: [AUTO, WEBP]
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
        }
      }
    }
  }
`

export default Post