import React from "react"
import config from "./config"
import {
    ModalWrapper,
    ModalContentStyled,
    ModalTriggerStyled
} from './styled'

const Modal = (props) => {
    const {
        showModal,
        isShowModal,
        paddingTopValue,
        size
    } = props

    return (
        <ModalWrapper role="dialog"
                      isShowModal={isShowModal}
                      onClick={() => showModal(false)}>
            <ModalContentStyled modalHeight={paddingTopValue}
                                modalWidth={size}>
                {props.children}
            </ModalContentStyled>
        </ModalWrapper>
    )
}

const ModalButton = (props) => {
    const { showModal, node_locale } = props
    return (
        <ModalTriggerStyled onClick={() => showModal(true)}>
            {config.buttonText[node_locale]}
        </ModalTriggerStyled>
    )
}

export { Modal, ModalButton }