import React from "react"
import Layout from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import { config404 } from '../constants'

import {
    HeroWrapper,
    HeroContent,
    HeroTitle,
    HeroDescription,
} from '../components/layout/styled'
import LinkButton from '../styles/404.styled'

const is404 = true
const lang = 'en-US'

const page404 = () => (
    <Layout hero={true}
            lang={lang}
            url="/404"
            nsfw={false}
            is404={is404}>
        <HeroWrapper>
            <HeroContent is404={is404}>
                <HeroTitle is404={is404}>
                    {config404.title}
                </HeroTitle>
                <HeroDescription is404={is404}>
                    {config404.description[lang]}
                </HeroDescription>
                <LinkButton to="/">
                    {config404.buttonText[lang]}
                </LinkButton>
            </HeroContent>
            <StaticImage src="../images/404.jpg"
                        alt="404 image"
                        placeholder="blurred"
                        layout="fullWidth"
                        quality={100}
                        breakpoints={[400, 800, 1080, 1366, 1440, 1920]}/>
        </HeroWrapper>
  </Layout>
)

export default page404