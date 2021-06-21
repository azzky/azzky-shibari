import styled from "styled-components"


const Wrapper = styled.footer`
    padding: 5px 20px;
    background-color: var(--color-white);
    color: var(--color-black);
    text-transform: uppercase;
    font-size: 0.5rem;
    font-weight: 500;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const DesignerText = styled.p`
    margin-block-start: 10px;

    @media (min-width: 768px) {
        margin-block-start: 0;
    }
`;

export { Wrapper, DesignerText }