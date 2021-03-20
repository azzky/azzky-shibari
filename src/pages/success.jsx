import React from "react"
import Layout from "../components/layout/layout"
import { GatsbyImage } from "gatsby-plugin-image";
import {graphql, StaticQuery, Link} from "gatsby"

import './success.scss'

const Success = () => (
    <StaticQuery
        query={graphql`{
  allFile(filter: {name: {eq: "404"}}) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
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
            <Layout hero={true} classes="success" lang="en" url="/404" nsfw={false}>
              <div className="hero__content">
                <h1 className="">Form submitted - thank you!</h1>
                <p className="">You will be contacted shortly</p>
                <Link to="/" className="hero__button">Home page</Link>
              </div>
              <GatsbyImage image={fluid} />
            </Layout>
        )}
    />
)

export default Success