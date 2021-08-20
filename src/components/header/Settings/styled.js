import styled from "styled-components"
import { MobileWidth } from '../../../constants'

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;

    @media (min-width: ${MobileWidth}px) {
        position: absolute;
        right: 0;
    }
`;

export const SettingsBlock = styled.div`
    position: absolute;
    bottom: var(--header-height);
    inline-size: 100%;
    left: 0;
    display: grid;
    justify-content: center;
    block-size: 70vh;
    padding: 40px 20px 0;
    transition: all .4s ease-in;
    opacity: ${props => props.active ? '1' : '0'};
    background-color: ${props => props.active ? 'var(--color-white)' : null};
    pointer-events: ${props => props.active ? null : 'none'};
    z-index:  ${props => props.active ? null : '-5'};

    a,
    .toggler {
        pointer-events: ${props => props.active ? null : 'none'};
    }
    
    @media (max-width: ${MobileWidth}px) {
        hr {
            display: block;
            block-size: 2px;
        }
    }

    @media (min-width: ${MobileWidth}px) {
        opacity: 1;
        z-index: 2;
        block-size: 100vh;
        inline-size: 100px;
        right: 0;
        top: -46px;
        left: auto;
        display: grid;
        grid-template-rows: var(--header-height) 1fr auto 1fr 80px;
        align-items: center;
        padding-block-start: 0;

        a,
        .toggler {
            pointer-events: all;
        }
    }
`;

export const Trigger = styled.button`
    @media (min-width: ${MobileWidth}px) {
        display: none;
    }
`;