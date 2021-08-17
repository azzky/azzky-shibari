import React from "react"
import Layout from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image";
import { configSuccess } from '../constants'

import {
  HeroWrapper,
  HeroContent,
  HeroTitle,
  HeroDescription
} from '../components/layout/styled'
import LinkButton from '../styles/404.styled'

const Success = () => {
  const lang = 'ru'
  const is404 = true
  return(
  <Layout hero={true} classes="success" lang={lang} url="/ru/success" nsfw={false} is404={is404}>
  <HeroWrapper>
    <HeroContent is404={is404}>
      <HeroTitle is404={is404}>{configSuccess.title[lang]}</HeroTitle>
      <HeroDescription is404={is404}>{configSuccess.description[lang]}</HeroDescription>
      <LinkButton to="/ru" className="hero__button">{configSuccess.buttonText[lang]}</LinkButton>
    </HeroContent>
    <StaticImage src="../images/404.jpg" alt="404 image" placeholder="blurred"
layout="fullWidth" quality={100} breakpoints={[400, 800, 1080, 1366, 1440, 1920]} />
  </HeroWrapper>
  </Layout>
)}

export default Success