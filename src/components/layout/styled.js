import styled from "styled-components"
import { HeroElement } from '../../styles/globalStyled'
import { MobileWidth } from '../../constants'

export const Main = styled.main`
    min-block-size: calc(100vh - var(--hero-height));
    background-color: ${props => props.isHome ? 'transparent' : 'var(--color-white)'};
    padding-block-start: ${props => props.isHero ? '0' : 'var(--header-height)'};
`;

export const HeroWrapper = styled.section`
    position: relative;
    inline-size: 100%;
    block-size: 100vh;
    z-index: 1;
    top: 0;
    left: 0;
    overflow: hidden;

    &::before {
        content: '';
        display: block;
        block-size: 100%;
        background-color: rgba($color: #000000, $alpha: 0.2);
    }

    .gatsby-image-wrapper {
        z-index: -2;
        position: absolute !important;
        top: 0;
        inline-size: 100%;
        block-size: 100%;
    }
`;
export const HeroContent = styled.div`
    position: absolute;
    top: 0;
    padding: 70px 15px 15px;
    max-block-size: 100vh;
    overflow-x: auto;
    display: grid;
    row-gap: 20px;
    block-size: 100%;
    grid-template-areas: 'h1' 'text' 'team' 'share';
    grid-template-rows: auto 1fr auto auto;

    @media (min-width: ${MobileWidth}px) {
        position: initial;
    }
`;
export const HeroTitle = styled.h1`
    grid-area: h1;

    @media (min-width: ${MobileWidth}px) {
        top: 150px;
        font-size: 2.125rem;
        ${HeroElement}
    }
`;
export const HeroDescription = styled.div`
    grid-area: text;

    a {
        color: inherit;
        text-decoration: underline;
    }

    @media (min-width: ${MobileWidth}px) {
        top: 280px;
        ${HeroElement}
        max-inline-size: 810px;
        block-size: 100%;
    }
`;
export const HeroVideoWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    inline-size: 100%;
    block-size: 100%;
    z-index: -2;
    pointer-events: none;
    overflow: hidden;
    background-color: var(--color-white);
`;
export const HeroVideo = styled.video`
    inline-size: 100vw;
    min-block-size: 100vh;
    block-size: 75.10vw; /* Given actual ratio, 18.7/24.9*100 = 75.10 */
    min-inline-size: 133.15vh; /* Given actual ratio, 24.9/18.7*100 = 133.15 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // filter: grayscale(1); /* comment on if wanted color */
`;