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
    display: ${props => props.is404 ? 'flex' : 'grid'};
    row-gap: 20px;
    block-size: 100%;
    grid-template-areas: 'h1' 'text' 'team' 'share';
    grid-template-rows: auto 1fr auto auto;
    // 404 specific
    flex-direction: ${props => props.is404 ? 'column' : null};
    align-items: ${props => props.is404 ? 'center' : null};
    inline-size: ${props => props.is404 ? '100%' : null};

    @media (min-width: ${MobileWidth}px) {
        position: ${props => props.is404 ? 'absolute' : 'initial'};
        // 404 specific
        right: ${props => props.is404 ? '204px' : null};
        left: ${props => props.is404 ? 'auto' : null};
        inline-size: ${props => props.is404 ? 'auto' : null};
        top: ${props => props.is404 ? '80px' : null};
        text-align: ${props => props.is404 ? 'center' : null};
        block-size: ${props => props.is404 ? 'auto' : null};
    }
`;
export const HeroTitle = styled.h1`
    grid-area: h1;
    // 404 specific
    font-weight: ${props => props.is404 ? '900' : null};
    font-size: ${props => props.is404 ? '9.375rem' : null};
    margin-block-end: ${props => props.is404 ? '30px' : null};
    // success page
    font-size: ${props => props.isSuccess ? '4.375rem' : null};

    @media (min-width: ${MobileWidth}px) {
        top: 150px;
        font-size: ${props => props.is404 ? '12.5rem' : '2.125rem'};
        ${HeroElement}
        // 404 specific
        position: ${props => props.is404 ? 'static' : null};
        margin-block-end: ${props => props.is404 ? '6px' : null};
        // success page
        font-size: ${props => props.isSuccess ? '4.375rem' : null};
        margin-block-start: ${props => props.isSuccess ? '100px' : null};
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
        block-size: ${props => props.is404 ? null : '100%'};
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