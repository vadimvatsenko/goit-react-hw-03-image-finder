
import React, { Components } from "react";
import style from './Modal.module.scss'

export default class Modal extends Components {
    
    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }


render() {
    return (
        <div className={style.overlay}>
            <div className={style.modal}>{this.prop.children}</div>
        </div>
    );
    }
    
}
