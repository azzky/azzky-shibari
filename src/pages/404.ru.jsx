import React from "react"
import Layout from "../components/layout/layout"
import { GatsbyImage } from "gatsby-plugin-image";
import {graphql, StaticQuery, Link} from "gatsby"
import './404.scss'

const page404 = () => (
    <StaticQuery
        query={graphql`{
  allFile(filter: {name: {eq: "404"}}) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
    }
  }
}
`}
    render={({
              allFile: {
                  edges: [
                      {
                          node: {
                              childImageSharp: {
                                  fluid
                            }
                          }
                      }
                  ]
              }
          }) => (
            <Layout hero={true} classes="page-404" lang="ru" url="/404" nsfw={false}>
              <div className="hero__content">
                <h1 className="hero__title">404</h1>
                <p className="hero__description">Ой! Здесь ничего нет.</p>
                <Link to="/ru/" className="hero__button">На главную</Link>
              </div>
              <GatsbyImage image={fluid} />
            </Layout>
        )}
    />
)

export default page404