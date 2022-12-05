
import React, { Component } from "react";
import style from './Modal.module.scss'

export default class Modal extends Component {
    
    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }


render() {
    return (
        <div className={style.overlay}>
            {/* <div className={style.modal}>{this.prop.children}</div> */}
                        <div className={style.modal}>1234</div>
        </div>
    );
    }
    
}
