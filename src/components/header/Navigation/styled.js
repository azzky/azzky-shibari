import styled from "styled-components"
import { MobileWidth } from '../../../constants'
import { VisuallyHidden } from '../../../styles/globalStyled'

export const Nav = styled.nav`
    @media (min-width: ${MobileWidth}px) {
        inline-size: 35px;
        block-size: 40px;
    }
`;

export const Hamburger = styled.button`
    display: none;

    @media (min-width: ${MobileWidth}px) {
        display: block;
        border: none;
        background: none;
        position: relative;
        inline-size: 100%;
        block-size: 100%;
        cursor: pointer;
    }
`;

export const HamburgerSpan = styled.span`
    inline-size: 5px;
    position: absolute;
    background-color:var(--color-black);
    top: 0;
    transition: all .3s ease-in;
    pointer-events: none;

    &:first-child {
        block-size: ${props => props.active ? '100%' : '50%'};
        left: 2.5px;
        transform:  ${props => props.active ? 'rotate(45deg) translate(9px, -9px)' : null};
    }
    
    &:nth-child(2) {
        block-size: 75%;
        left: calc(50% - 3px);
        opacity: ${props => props.active ? '0' : '1'};
    }
    
    &:last-child {
        block-size: 100%;
        right: 2.5px;
        transform:  ${props => props.active ? 'rotate(-45deg) translate(-9px, -9px)' : null};
    }
`;

export const MenuList = styled.div`
    @media (min-width: ${MobileWidth}px) {
        position: absolute;
        left: 0;
        inline-size: 100%;
        top: var(--header-height);
        block-size: calc(100vh - var(--header-height));
        opacity: ${props => props.active ? '1' : '0'};
        z-index: ${props => props.active ? '3' : '-2'};
        pointer-events: ${props => props.active ? 'all' : 'none'};
        transition: all .4s ease-in;
        background-color: ${props => props.active ? 'var(--color-white)' : null};
    }
`;
export const MenuUl = styled.ul`
    list-style: none;
    display: flex;
    @media (min-width: ${MobileWidth}px) {
        flex-direction: column;
        margin-block-start: 34px;

        & > * + * {
          margin-block-start: 40px;
        }
    }
`;
export const MenuItem = styled.li`
    inline-size: 25%;
    display: flex;
    justify-content: center;

    svg {
        fill: var(--color-black);
    }

    @media (max-width: ${MobileWidth}px) {
        &:first-child {
            display: none;
        }
    }

    @media (min-width: ${MobileWidth}px) {
        inline-size: auto;
        text-transform: uppercase;
        font-size: 6rem;
        font-weight: 900;
        line-height: 120px;

        svg {
            display: none;
        }

        a.active,
        a:hover {
            color: var(--color-highlight);
        }
    }
`;

export const MenuLabel = styled.span`
    @media (max-width: ${MobileWidth}px) {
        ${VisuallyHidden}
    }

    @media (min-width: ${MobileWidth}px) {
        display: block;
    }
`;
