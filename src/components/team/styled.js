import styled from "styled-components"
import { HeroElement } from '../../styles/globalStyled'
import { MobileWidth } from '../../constants'

const Wrapper = styled.div`
    grid-area: team;

    a {
        font-weight: 500;
    }

    @media (max-width: ${MobileWidth}px) {
        margin-block-start: 20px;
    }

    @media (min-width: ${MobileWidth}px) {
        bottom: 80px;
        ${HeroElement}
    }
`;

export { Wrapper }