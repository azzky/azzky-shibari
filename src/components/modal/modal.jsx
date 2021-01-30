import React from "react"
import './modal.scss'

const Modal = (props) => {
    const closeModal = props.closeModal;
    const showModal = props.showModal;
    const fullImg = props.fullImg;
    return (
        <div className={`modal ${showModal ? 'open' : ''}`} onClick={e => closeModal(e)}>
            <img src={fullImg} alt=""/>
        </div>
    )
}

export default Modal;