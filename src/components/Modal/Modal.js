
import React, { Component } from "react";
import { createPortal } from "react-dom";
import style from './Modal.module.scss'

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {


    
    componentDidMount() {
        console.log('componentDidMount');
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose();
    }
  };


render() {
    return createPortal(
        <div className={style.overlay}>
            <div className={style.modal}>{this.props.children}</div>
        </div>,
        modalRoot,
    );
    }
    
}


