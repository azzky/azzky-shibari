import React from "react"
import Layout from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image";
import { configSuccess } from '../constants'
import useCenzorship from '../hooks/useCenzorship'

import {
    HeroWrapper,
    HeroContent,
    HeroTitle,
    HeroDescription
} from '../components/layout/styled'
import LinkButton from '../styles/404.styled'

const Success = () => {
    const lang = 'ru'
    const isSuccess = true
    const is404 = true
    const { pageNsfw, toggleNsfw } = useCenzorship()

    return(
    <Layout hero={true}
            lang={lang}
            url="/ru/success"
            nsfw={false}
            isSuccess={isSuccess}
            is404={is404}
            pageNsfw={pageNsfw}
            toggleNsfw={toggleNsfw}>
        <HeroWrapper>
            <HeroContent isSuccess={isSuccess}>
                <HeroTitle isSuccess={isSuccess}>
                    {configSuccess.title[lang]}
                </HeroTitle>
                <HeroDescription isSuccess={isSuccess}>
                    {configSuccess.description[lang]}
                </HeroDescription>
                <LinkButton to="/ru"
                            isSuccess={isSuccess}>
                    {configSuccess.buttonText[lang]}
                </LinkButton>
            </HeroContent>
            <StaticImage src="../images/404.jpg"
                         alt="404 image"
                         placeholder="blurred"
                         layout="fullWidth"
                         quality={100}
                         breakpoints={[400, 800, 1080, 1366, 1440, 1920]} />
        </HeroWrapper>
    </Layout>
)}

export default Success