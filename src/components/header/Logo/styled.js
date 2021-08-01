import styled from "styled-components"
import { Link } from "gatsby"

import { MobileWidth } from '../../../constants'
import { HorizontallyCenter } from '../../../styles/globalStyled'

export const LogoWrapper = styled(Link)`
    position: fixed;
    top: 10px;
    ${HorizontallyCenter}

    @media (min-width: ${MobileWidth}px) {
        transform: none;
        left: 20px;
        top: auto;
    }
`;

export const LogoImage = styled.img`
    filter: invert(1);
`;