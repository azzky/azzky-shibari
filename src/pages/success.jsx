import React from "react"
import Layout from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import './success.scss'

const Success = () => (
  <Layout hero={true} classes="success" lang="en" url="/404" nsfw={false}>
    <div className="hero__content">
      <h1 className="">Form submitted - thank you!</h1>
      <p className="">You will be contacted shortly</p>
      <Link to="/" className="hero__button">Home page</Link>
    </div>
    <StaticImage src="../images/404.jpg" alt="404 image" placeholder="blurred"
layout="fullWidth" quality={100} breakpoints={[400, 800, 1080, 1366, 1440, 1920]} />
  </Layout>
)

export default Success