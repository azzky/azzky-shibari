import styled from "styled-components"
import { MobileWidth } from '../../constants'

export const Subscription = styled.div`
    @media (min-width: ${MobileWidth}px) {
        display: none;
    }
`;

export const SubscriptionButton = styled.button`
    @media (max-width: ${MobileWidth}px) {
        background-color: var(--color-black);
        color: var(--color-white);
        padding: 1em 3em;
        margin: 1em auto;
        display: block;
    }
`;