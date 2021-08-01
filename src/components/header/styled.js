import styled from "styled-components"
import { MobileWidth } from '../../constants'

export const HeaderRoot = styled.header`
    display: grid;
    grid-template-columns: 4fr 1fr;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    top: auto;
    z-index: 2;
    pointer-events: none;
    inline-size: 100%;
    block-size: var(--header-height);
    transition: all .4s ease-in;
    background-color: ${props => props.active ? 'var(--color-white)' : null};

    hr {
        display: none;
    }

    a {
        color: var(--color-black);
    }

    & > * {
        pointer-events: all;
    }

    @media (min-width: ${MobileWidth}px) {
        top: 0;
        bottom: auto;
        display: flex;

        hr {
            color: var(--color-black);
            inline-size: 2px;
            block-size: 100%;
            margin: 0 auto;
            display: block;
        }
    }
`;