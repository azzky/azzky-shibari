import styled from "styled-components"

const ModalWrapper = styled.div`
    opacity: ${props => props.isShowModal ? '1' : '0'};
    background-color: rgba(0,0,0,.7);
    position: fixed;
    top: 0;
    left: 0;
    inline-size: 100%;
    block-size: 100%;
    z-index: ${props => props.isShowModal ? '2' : '-1'};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3em;

    img {
        max-block-size: 100%;
        cursor: auto;
    }
`;
const ModalContentStyled = styled.div`
    overflow: hidden;
    position: relative;
    padding-block-start: ${props => props.modalHeight ? props.modalHeight : 0};
    inline-size: ${props => props.modalWidth ? props.modalWidth + 'px' : 0};

    >div> * {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        inline-size: 100%;
        height: 100%;
    }
`;
const ModalTriggerStyled = styled.button`
    font-size: inherit;
    margin-left: 4pt;
    text-decoration: underline;
`;

export { ModalWrapper, ModalContentStyled, ModalTriggerStyled }