import styled from "styled-components"
import config from "./config"
import { MobileWidth } from '../../constants'

export const Gallery = styled.section`
    padding: ${props => props.isPost ? '15px' : '0'} ${config.gapS} 0;
    display: flex;
    justify-content: center;

    @media (min-width: ${config.deviceM}px) {
        display: grid;
        column-gap: ${config.gapM};
        padding-block-start: ${props => props.isPost ? config.gapM : null};
        grid-template-columns: repeat(${props => props.columnNumber}, ${config.imageSize});
    }

    @media (min-width: ${config.deviceL + 171}px) {
        padding-inset-inline-end: 42px;
        padding-inset-inline-start: 42px;
        padding-block-start: ${props => props.isPost ? config.gapL : null};
        column-gap: ${config.gapL};
    }
`;

export const Column = styled.div`
    inline-size: 100%;
    max-inline-size: ${config.imageSize};
    display: ${props => props.isHidden ? 'none' : 'initial'};
`;

export const Item = styled.figure`
    position: relative;
    margin-block-end: ${config.gapS};

    .opener {
        position: absolute;
        left: 0;
        top: 0;
        inline-size: 100%;
        block-size: 100%;
        z-index: 1;
    }

    @media (min-width: ${config.deviceM + 10}px) {
        margin-block-end: ${config.gapM};
    }

    @media (min-width: ${config.deviceL + 171}px) {
        margin-block-end: ${config.gapL};
    }
`;

export const FilterList = styled.section`
    margin-block-end: 15px;
    padding-block-start: 15px;
    overflow: auto;
    white-space: nowrap;

    @media (min-width: ${MobileWidth}px) {
        padding-block-start: 0;
        display: grid;
        grid-auto-flow: column;
        justify-content: center;
        gap: 10px;
    }
`;

export const FilterItem = styled.button`
    & {
        background: none;
        border: none;
        color: var(--color-highlight);
        padding: 0 15px;
        font-size: inherit;
        text-transform: capitalize;
        color: var(--color-highlight);
    }

    &:hover {
        cursor: pointer;
    }

    &:disabled {
        color: var(--color-black);
    }

    @media (min-width: ${MobileWidth}px) {
        padding: 25px 15px;
    }
`;