import styled from "styled-components"
import { HeroElement } from '../../styles/globalStyled'

const Wrapper = styled.div`
    grid-area: team;

    a {
        font-weight: 500;
    }

    @media (max-width: 768px) {
        margin-block-start: 20px;
    }

    @media (min-width: 768px) {
        bottom: 80px;
        ${HeroElement}
    }
`;

export { Wrapper }