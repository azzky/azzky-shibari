import styled from "styled-components"
import { HorizontallyCenter, VisuallyHidden } from '../../styles/globalStyled'

const Wrapper = styled.label`
    position: relative;
    display: inline-block;
    inline-size: 50px;
    block-size: 26px;
    z-index: 3;
    pointer-events: all;
    color: var(--color-white);
    line-height: 26px;
    font-size: 0.625rem;
    padding: 0 5px;
    background-color: var(--color-black);
    border-radius: 26px;
    text-align: ${props => props.state ? 'right' : 'left'};
    cursor: pointer;
    ${HorizontallyCenter}

    &::before {
        position: absolute;
        content: "";
        block-size: 16px;
        inline-size: 16px;
        left: ${props => props.state ? '3px' : '27px'};
        right: ${props => props.state ? '27px' : '3px'};
        bottom: 5px;
        background-image: url('https://vk.com/emoji/e/f09f8c9a.png');
        background-color: var(--color-white);
        transition: all .4s;
        border-radius: 50%;
        background-blend-mode: ${props => props.state ? 'normal' : 'color'};
    }

    input {
        ${VisuallyHidden}
    }
`;

export { Wrapper }