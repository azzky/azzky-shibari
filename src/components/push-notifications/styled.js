import styled from "styled-components"
import { MobileWidth } from '../../constants'

export const Subscription = styled.div`
    @media (min-width: ${MobileWidth}px) {
        display: ${props => props.isVisible ? null : 'none'};
    }
`;

export const SubscriptionButton = styled.button`
    background-color: var(--color-black);
    color: var(--color-white);
    padding: 1em 3em;
    margin: 1em auto;
    display: block;
    text-transform: uppercase;

    @media (min-width: ${MobileWidth}px) {
        margin-left: 0;
    }
`;