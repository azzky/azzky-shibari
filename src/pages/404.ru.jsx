import React from "react"
import Layout from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image";
import {Link} from "gatsby"

import './404.scss'

const page404 = () => (
  <Layout hero={true} classes="page-404" lang="ru" url="/404" nsfw={false}>
    <div className="hero__content">
      <h1 className="hero__title">404</h1>
      <p className="hero__description">Ой! Здесь ничего нет.</p>
      <Link to="/ru/" className="hero__button">На главную</Link>
    </div>
    <StaticImage src="../images/404.jpg" alt="404 image" placeholder="blurred"
    layout="fullWidth" quality={100} breakpoints={[400, 800, 1080, 1366, 1440, 1920]} />
  </Layout>
)

export default page404