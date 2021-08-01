import styled from "styled-components"
import { HeroElement } from '../../styles/globalStyled'
import { MobileWidth } from '../../constants'

const Wrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-area: share;
    gap: 5px;

    p {
        font-size: 0.813rem;
    }

    @media (max-width: ${MobileWidth}px) {
        margin: 20px 0 15px;
    }
    
    @media (min-width: ${MobileWidth}px) {
        bottom: 30px;
        margin-block-end: 0;
        ${HeroElement}
    }
`;

export default Wrapper