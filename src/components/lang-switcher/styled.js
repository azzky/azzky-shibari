import styled from "styled-components"

const Wrapper = styled.div`
    & {
        display: grid;
        grid-auto-flow: column;
        gap: 20px;
        justify-content: center;
    }

    a {
        text-transform: uppercase;
    }

    a:not([href]) {
        color: var(--color-highlight);
        pointer-events: none;
    }
`;

export { Wrapper }