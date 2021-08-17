import styled from "styled-components"
import {Link} from "gatsby"
import { MobileWidth } from '../constants'

const LinkButton = styled(Link)`
    margin-block-start: 56px;
    line-height: 70px;
    text-transform: uppercase;
    background-color: var(--color-black);
    inline-size: 100%;
    color: var(--color-white);
    text-align: center;

    @media (min-width: ${MobileWidth}px) {
        inline-size: 350px;
    }
`;

export default LinkButton