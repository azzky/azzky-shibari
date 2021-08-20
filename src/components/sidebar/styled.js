import styled from "styled-components"
import { MobileWidth } from '../../constants'

const Wrapper = styled.div`
    display: flex;
    justify-content: ${props => props.isBig ? null : 'center'};

    svg {
        block-size: 40px;
        inline-size: 40px;
        margin: ${props => props.isBig ? '35px 25px' : '25px 0'};
        transform: ${props => props.isBig ? 'scale(2)' : null};
    }

    use {
        transform: ${props => props.isBig ? null : 'scale(1.6)'};
    }

    a {
        line-height: 0;
    }

    @media (min-width: ${MobileWidth}px) {
        display: ${props => props.isBig ? null : 'grid'};
        gap: 25px;
        margin: ${props => props.isBig ? '45px 25px 0' : '25px 0'};
        justify-content: ${props => props.isBig ? null : 'center'};

        svg {
            block-size: auto;
            inline-size: auto;
            margin: 0;
        }
    
        use {   
            transform: none;
        }
    }
`;

export { Wrapper }