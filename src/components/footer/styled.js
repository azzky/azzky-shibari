import styled from "styled-components"
import { MobileWidth } from '../../constants'

const Wrapper = styled.footer`
    padding: 5px 20px;
    background-color: ${props => props.is404 ? 'transparent' : 'var(--color-white)'};
    color: var(--color-black);
    text-transform: uppercase;
    font-size: 0.5rem;
    font-weight: 500;
    position: ${props => props.is404 ? 'absolute' : null};
    bottom: ${props => props.is404 ? '0' : null};
    inline-size: ${props => props.is404 ? '100%' : null};
    z-index: ${props => props.is404 ? '1' : null};

    @media (min-width: ${MobileWidth}px) {
        display: flex;
        justify-content: space-between;
    }
`;

const DesignerText = styled.p`
    margin-block-start: 10px;

    @media (min-width: ${MobileWidth}px) {
        margin-block-start: 0;
    }
`;

export { Wrapper, DesignerText }