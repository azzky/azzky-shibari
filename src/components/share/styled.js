import styled from "styled-components"
import { HeroElement } from '../../styles/globalStyled'

const Wrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-area: share;
    gap: 5px;

    p {
        font-size: 0.813rem;
    }

    @media (max-width: 768px) {
        margin: 20px 0 15px;
    }
    @media (min-width: 768px) {
        bottom: 30px;
        margin-block-end: 0;
        ${HeroElement}
    }
`;

export default Wrapper