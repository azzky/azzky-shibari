import React from "react"
import Layout from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import {Link} from "gatsby"

import './404.scss'

const page404 = () => (
  <Layout hero={true} classes="page-404" lang="en" url="/404" nsfw={false}>
    <div className="hero__content">
      <h1 className="hero__title">404</h1>
      <p className="hero__description">Oops! Page not found.</p>
      <Link to="/" className="hero__button">Home page</Link>
    </div>
    <StaticImage src="../images/404.jpg" alt="404 image" placeholder="blurred"
    layout="fullWidth" quality={100} breakpoints={[400, 800, 1080, 1366, 1440, 1920]} />
  </Layout>
)

export default page404